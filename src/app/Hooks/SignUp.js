"use client";

import { useState } from "react";
import axios from "axios";

const API_SIGNUP_URL = "https://test-api-dev-4u46.onrender.com/api/users/";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const signUp = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validar los datos del formulario antes de enviar
      const { username, password, email } = userData;
      if (!username || !password || !email) {
        throw new Error("Todos los campos obligatorios deben ser completados.");
      }

      // Agregamos el objeto description con content: "test"
      const dataToSend = {
        ...userData,
        description: {
          content: "test",
        },
      };

      // Enviar la solicitud de registro con el contenido agregado
      const response = await axios.post(API_SIGNUP_URL, dataToSend);

      if (response.status === 201) {
        setSuccess(true); // Indicar que el registro fue exitoso
      } else {
        throw new Error("Error inesperado durante el registro.");
      }
    } catch (err) {
      // Manejo de errores
      if (axios.isAxiosError(err)) {
        // Extraer mensaje de error del backend si existe
        const backendMessage =
          typeof err.response?.data === "string"
            ? err.response.data
            : err.response?.data?.description || "Error en el servidor.";
        setError(backendMessage);
      } else {
        setError(err.message || "Error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading, error, success };
}
