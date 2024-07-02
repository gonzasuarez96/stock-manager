"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Page() {
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    code: "",
    unit: "",
    id_categorie: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://s12-16-ft-php-next-production.up.railway.app/api/category",
        );
        setCategories(response.data.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://s12-16-ft-php-next-production.up.railway.app/api/article",
        data,
      );
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="flex h-full w-full justify-center p-5 text-textColor">
      <div className="h-70vh w-2/3 rounded-lg border bg-white p-5 shadow-lg">
        <h2 className="border-b-2 border-gray-300 p-4 text-center text-3xl font-bold">
          Añadir Articulo
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 text-left">
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              value={formData.name}
              name="name"
              placeholder="Nombre"
              onChange={handleInputChange}
              className="w-full border px-3 py-3 text-lg font-bold"
            />
            {errors.name && (
              <p className="text-red-500">Por favor, complete este campo.</p>
            )}
          </div>
          <div className="mt-4 text-left">
            <input
              type="text"
              id="description"
              {...register("description", { required: true })}
              value={formData.description}
              name="description"
              placeholder="Descripcion"
              onChange={handleInputChange}
              className="w-full border px-3 py-3 text-lg font-bold"
            />
            {errors.description && (
              <p className="text-red-500">Por favor, complete este campo.</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="mt-4 text-left">
              <input
                type="text"
                id="code"
                {...register("code", { required: true })}
                value={formData.code}
                name="code"
                placeholder="Codigo"
                onChange={handleInputChange}
                className="w-full border px-3 py-3 text-lg font-bold"
              />
              {errors.code && (
                <p className="text-red-500">Por favor, complete este campo.</p>
              )}
            </div>
            <div className="mt-4 text-left">
              <select
                id="id_categorie"
                {...register("id_categorie", { required: true })}
                value={formData.id_categorie}
                name="id_categorie"
                onChange={handleInputChange}
                className="w-full border px-3 py-4 text-lg font-bold"
              >
                <option value="">Categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.id_categorie && (
                <p className="text-red-500">
                  Por favor, seleccione una categoría.
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="m-4 rounded bg-txt-custom px-10 py-2 font-bold text-white transition duration-300 hover:bg-sky-700"
              type="submit"
            >
              Agregar Articulo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
