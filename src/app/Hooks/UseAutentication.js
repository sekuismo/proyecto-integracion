"use client";

import { useState } from "react";
import axios from "axios";

const API_LOGIN_URL = "https://test-api-dev-4u46.onrender.com/api/token/";
const API_LOGOUT_URL = "https://test-api-dev-4u46.onrender.com/api/logout/";

export default function useAuthActions() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      // Validar si los datos son correctos antes de enviar
      if (!username || !password) {
        throw new Error("El nombre de usuario y la contraseña son obligatorios.");
      }

      // Intentar la solicitud al backend
      const response = await axios.post(API_LOGIN_URL, { username, password });

      // Verificar si el backend devolvió el token
      if (response?.data?.token) {
        const { token } = response.data;
        localStorage.setItem("authToken", token); // Guardar el token
        setLoading(false);
        return token; // Devolver el token
      } else {
        throw new Error("La respuesta del servidor no contiene un token.");
      }
    } catch (err) {
      // Capturar errores del backend o de red
      if (axios.isAxiosError(err)) {
        const backendMessage = err.response?.data?.non_field_errors || err.response?.data?.detail;
        setError(backendMessage || "Error desconocido en el servidor.");
      } else {
        setError(err.message || "Error inesperado.");
      }
      setLoading(false);
      return null;
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No hay token para cerrar sesión.");

      // Enviar la solicitud al backend para invalidar el token
      await axios.post(
        API_LOGOUT_URL,
        {}, // Cuerpo vacío
        {
          headers: {
            Authorization: `Token ${token}`, // Incluir el token en el header
          },
        }
      );

      localStorage.removeItem("authToken"); // Eliminar el token
      setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const backendMessage = err.response?.data?.detail || "Error desconocido al cerrar sesión.";
        setError(backendMessage);
      } else {
        setError(err.message || "Error inesperado.");
      }
      setLoading(false);
    }
  };

  return { login, logout, loading, error };
}
