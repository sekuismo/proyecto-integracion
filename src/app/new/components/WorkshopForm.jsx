"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CountrySelect from './CountrySelect';
import CitySelect from './CitySelect';
import CommuneSelect from './CommuneSelect';

const WorkshopForm = () => {
  const initialValues = {
    name: '',
    address: '',
    country: 'Chile', // Por defecto Chile
    city: 'Santiago', // Por defecto Santiago
    commune: '',
    phone_number: '',
    email: '',
    latitude: '',
    longitude: '',
    description: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(255, 'El nombre no puede tener más de 255 caracteres')
      .required('El nombre es obligatorio'),
    address: Yup.string().required('La dirección es obligatoria'),
    country: Yup.string().required('El país es obligatorio'),
    city: Yup.string().required('La ciudad es obligatoria'),
    commune: Yup.string().required('La comuna es obligatoria'),
    phone_number: Yup.string()
      .max(20, 'El número de teléfono no puede tener más de 20 caracteres')
      .required('El número de teléfono es obligatorio'),
    email: Yup.string()
      .email('Debe ser un correo electrónico válido')
      .required('El correo electrónico es obligatorio'),
    latitude: Yup.number()
      .min(-90, 'La latitud debe estar entre -90 y 90')
      .max(90, 'La latitud debe estar entre -90 y 90')
      .required('La latitud es obligatoria'),
    longitude: Yup.number()
      .min(-180, 'La longitud debe estar entre -180 y 180')
      .max(180, 'La longitud debe estar entre -180 y 180')
      .required('La longitud es obligatoria'),
    description: Yup.string().max(1000, 'La descripción no puede tener más de 1000 caracteres'),
  });

  const handleSubmit = (values) => {
    console.log('Datos del formulario:', values);
    // Aquí puedes enviar los datos al backend.
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Nombre del Taller</label>
            <Field
              name="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700">Dirección</label>
            <Field
              name="address"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
          </div>
          <CountrySelect value={values.country} onChange={(value) => setFieldValue('country', value)} />
          <CitySelect value={values.city} onChange={(value) => setFieldValue('city', value)} />
          <CommuneSelect value={values.commune} onChange={(value) => setFieldValue('commune', value)} />
          <div>
            <label htmlFor="phone_number" className="block text-gray-700">Número de Teléfono</label>
            <Field
              name="phone_number"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
            <Field
              name="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="latitude" className="block text-gray-700">Latitud</label>
            <Field
              name="latitude"
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="latitude" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="longitude" className="block text-gray-700">Longitud</label>
            <Field
              name="longitude"
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="longitude" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700">Descripción</label>
            <Field
              name="description"
              as="textarea"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Agregar Taller
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default WorkshopForm;
