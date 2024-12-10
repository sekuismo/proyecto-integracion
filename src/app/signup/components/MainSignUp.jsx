"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSignUp from "@/app/Hooks/SignUp";

function MainSignUp() {
  const { signUp, loading, error, success } = useSignUp();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      is_staff: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("El nombre es obligatorio"),
      last_name: Yup.string().required("El apellido es obligatorio"),
      username: Yup.string().required("El nombre de usuario es obligatorio"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(/[A-Za-z]/, "Debe contener al menos una letra")
        .matches(/\d/, "Debe contener al menos un número")
        .required("La contraseña es obligatoria"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
        .required("La confirmación de contraseña es obligatoria"),
      email: Yup.string()
        .email("Debe ser un correo electrónico válido")
        .required("El correo electrónico es obligatorio"),
      is_staff: Yup.boolean(),

      
    }),
    onSubmit: async (values) => {
      const { confirmPassword, ...dataToSend } = values;
      await signUp(dataToSend);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Registro de Usuario
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.first_name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Apellido
            </label>
            <input
              type="text"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.last_name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nombre de Usuario
            </label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.confirmPassword}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="is_staff"
                checked={formik.values.is_staff}
                onChange={formik.handleChange}
                className="mr-2 focus:ring-2 focus:ring-blue-500"
              />
              ¿Es administrador (staff)?
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mt-4">¡Registro exitoso!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default MainSignUp;
