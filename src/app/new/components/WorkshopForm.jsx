"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CountrySelect from "./CountrySelect";
import CitySelect from "./CitySelect";
import CommuneSelect from "./CommuneSelect";

import { useAuth } from "@/context/AuthProvider";
import useWorkshops from "@/app/Hooks/UseWorkshops";

const WorkshopForm = () => {
  const { token } = useAuth(); // Obtener el token desde el contexto
  const { addWorkshop, loading, error } = useWorkshops(token); // Pasar el token al hook

  const initialValues = {
    name: "",
    address: "",
    country: "Chile", // Por defecto Chile
    city: "Santiago", // Por defecto Santiago
    comuna: "",
    // Agregamos +56 por defecto
    phone_number: "+56",
    email: "",
    latitude: "",
    longitude: "",
    description: "",
    google_maps_url: "",
    website_url: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(255, "El nombre no puede tener más de 255 caracteres")
      .required("El nombre es obligatorio"),
    address: Yup.string().required("La dirección es obligatoria"),
    country: Yup.string().required("El país es obligatorio"),
    city: Yup.string().required("La ciudad es obligatoria"),
    comuna: Yup.string().required("La comuna es obligatoria"),
    phone_number: Yup.string()
      .required("El número de teléfono es obligatorio")
      .matches(/^\d+$/, "El número de teléfono debe contener solo dígitos"),

    email: Yup.string()
      .email("Debe ser un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    latitude: Yup.number()
      .min(-90, "La latitud debe estar entre -90 y 90")
      .max(90, "La latitud debe estar entre -90 y 90")
      .required("La latitud es obligatoria"),
    longitude: Yup.number()
      .min(-180, "La longitud debe estar entre -180 y 180")
      .max(180, "La longitud debe estar entre -180 y 180")
      .required("La longitud es obligatoria"),
    description: Yup.string().max(1000, "La descripción no puede tener más de 1000 caracteres"),
    google_maps_url: Yup.string()
      .url("Debe ser una URL válida")
      .required("La URL de Google Maps es obligatoria"),
    website_url: Yup.string()
      .url("Debe ser una URL válida")
      .required("La URL del sitio web es obligatoria"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    // agregamos el código de chile antes de enviarlo
    values.phone_number = `+56${values.phone_number}`;

    try {
      console.log("Enviando valores al servidor:", values);
      await addWorkshop(values); // Llama al método del hook
      resetForm(); // Resetea el formulario después de un envío exitoso
      alert("Taller agregado exitosamente");
    } catch (err) {
      console.error("Error al agregar el taller:", err);
      alert("Hubo un error al agregar el taller. Intenta nuevamente.");
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Agregar Taller</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Nombre del Taller
                </label>
                <Field
                  name="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700">
                  Dirección
                </label>
                <Field
                  name="address"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
              </div>
              <CountrySelect value={values.country} onChange={(value) => setFieldValue("country", value)} />
              <CitySelect value={values.city} onChange={(value) => setFieldValue("city", value)} />
              <CommuneSelect value={values.comuna} onChange={(value) => setFieldValue("comuna", value)} />
              <div>
                <label htmlFor="phone_number" className="block text-gray-700 mb-1">
                  Número de Teléfono
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700">
                    +56
                  </span>
                  <Field
                    name="phone_number"
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm mt-1" />
              </div>


              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Correo Electrónico
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="latitude" className="block text-gray-700">
                  Latitud
                </label>
                <Field
                  name="latitude"
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="latitude" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="longitude" className="block text-gray-700">
                  Longitud
                </label>
                <Field
                  name="longitude"
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="longitude" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="google_maps_url" className="block text-gray-700">
                  URL de Google Maps
                </label>
                <Field
                  name="google_maps_url"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="google_maps_url" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="website_url" className="block text-gray-700">
                  URL del Sitio Web
                </label>
                <Field
                  name="website_url"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="website_url" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-700">
                  Descripción
                </label>
                <Field
                  name="description"
                  as="textarea"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                  }`}
                disabled={loading}
              >
                {loading ? "Guardando..." : "Agregar Taller"}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default WorkshopForm;
