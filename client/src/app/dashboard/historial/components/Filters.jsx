"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from "./data";
import NotificationPopover from "../../stock/components/NotificationPopover";

const sortOptions = [
  { value: "fecha", label: "Fecha" },
  { value: "tipo", label: "Tipo" },
  { value: "estado", label: "Estado" },
  { value: "realizadaPor", label: "Realizado por" },
];

const Filters = ({ func }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    func(selectedValue, searchValue);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearch = () => {
    func("", searchValue);
    console.log("Código:", searchValue);
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex items-center rounded-full bg-white p-2 shadow-md">
        <input
          type="text"
          id="search"
          placeholder="Buscar por número"
          className="mx-2 p-2"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>

      <div className="flex items-center">
        <select
          id="sort"
          className="flex items-center rounded-full bg-white p-2 px-4 shadow-md"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option
            key="default"
            className="bg-gray-100 text-gray-800 shadow"
            value=""
          >
            Ordenar por
          </option>
          {sortOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-gray-100 text-gray-800"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <NotificationPopover />
    </div>
  );
};

export default Filters;
