import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useCreateReviews from "@/app/Hooks/CreateReviews";

import { useAuth } from "@/context/AuthProvider";

const WorkshopCommentForm = ({ workshopId }) => {
  const { createReview, loading, error } = useCreateReviews();
  const { user, token } = useAuth(); // Obtener usuario y token del contexto


  // Si no hay usuario logueado, no mostrar el formulario
  if (!user || !token) {
    return (
      <p className="text-red-500 text-center mt-6">
        Debes iniciar sesión para dejar un comentario.
      </p>
    );
  }

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    body: Yup.string()
      .trim()
      .required("El comentario es obligatorio."),
    recommend: Yup.boolean(),
    rating: Yup.number()
      .min(1, "El rating debe ser al menos 1.")
      .max(10, "El rating no puede ser mayor a 10.")
      .required("El rating es obligatorio."),
    title: Yup.string().trim(), // Validación opcional para el título
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Enviando valores al backend:", values);
  
      const authToken = token || localStorage.getItem("authToken");
      console.log("Token utilizado:", authToken);
  
      if (!authToken) {
        throw new Error("No se encontró un token de autenticación válido.");
      }
  
      await createReview({
        body: values.body,
        title: values.title || "Sin título", // Opcional
        workshopId: parseInt(workshopId, 10), // Asegúrate de que sea un entero
        recommend: values.recommend,
        rating: values.rating,
      });
  
      resetForm();
      console.log("Comentario enviado con éxito.");
    } catch (err) {
      console.error("Error al agregar el comentario:", err.message);
    }
  };
  

  console.log('aquí está el token ')
  console.log('aquí está el token ')
  console.log('aquí está el token ')
  console.log(token)
  console.log(token)
  console.log(token)
  console.log(token)
  console.log(token)
  console.log(token)

  return (

    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Deja tu comentario
      </h3>
      {error && (
        <p className="text-red-500 mb-4">
          {typeof error === "object" ? JSON.stringify(error, null, 2) : error}
        </p>
      )}

      <Formik
        initialValues={{
          title: "",
          body: "",
          recommend: false,
          rating: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-1"
              >
                Título
              </label>
              <Field
                name="title"
                type="text"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Escribe un título opcional..."
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="body"
                className="block text-gray-700 font-medium mb-1"
              >
                Comentario
              </label>
              <Field
                name="body"
                as="textarea"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Escribe tu comentario aquí..."
                rows="4"
              />
              <ErrorMessage
                name="body"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                ¿Recomendarías este taller?????
              </label>
              <Field type="checkbox" name="recommend" className="mr-2" />
              <span className="text-gray-600">Sí</span>
            </div>

            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-gray-700 font-medium mb-1"
              >
                Rating (1-10)
              </label>
              <Field
                name="rating"
                type="number"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ingresa un rating entre 1 y 10"
              />
              <ErrorMessage
                name="rating"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={loading || isSubmitting}
              className={`mt-4 w-full py-2 px-4 rounded-md text-white font-semibold ${loading || isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
              {loading || isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkshopCommentForm;
