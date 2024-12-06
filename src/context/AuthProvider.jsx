"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import useAuthActions from "@/app/Hooks/UseAutentication";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Crear el proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const { login, logout, loading, error } = useAuthActions();

  // Cargar el token desde localStorage al montar el componente
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
      setUser({ username: "admin" }); // Aquí puedes hacer una solicitud para obtener datos reales del usuario
    }
  }, []);

  const handleLogin = async (username, password) => {
    const token = await login(username, password);
    if (token) {
      setToken(token);
      setUser({ username }); // Simula el usuario autenticado
    }
  };

  const handleLogout = () => {
    logout();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login: handleLogin,
        logout: handleLogout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);
