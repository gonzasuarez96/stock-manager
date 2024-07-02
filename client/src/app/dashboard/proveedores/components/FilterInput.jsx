"use client";
import React, { useEffect, useState } from "react";
import useStore from "@/lib/store";

const FilterInput = ({ handleSelect }) => {
  const { providers, fetchProvider } = useStore();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectValue = event.target.value;
    setSelectedOption(selectValue);
  };

  const toggleSelect = () => {
    handleSelect(selectedOption);
  };

  useEffect(() => {
    fetchProvider();
  }, []);

  return (
    <div className="flex items-center">
      <select
        id="filter"
        className="flex items-center rounded-full bg-white p-2 px-4 shadow-md"
        onChange={handleSelectChange} // Maneja el cambio de selección
        value={selectedOption} // Establece el valor seleccionado del estado
        onClick={toggleSelect}
      >
        <option
          key="default"
          className="bg-gray-100 text-gray-800 shadow"
          value=""
        >
          Ordenar por
        </option>
        {providers?.map((provider, index) => (
          <option
            key={index}
            value={provider.name}
            className="bg-gray-100 text-gray-800"
          >
            {provider.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterInput;
