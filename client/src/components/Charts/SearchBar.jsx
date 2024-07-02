"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationPopover from "@/app/dashboard/stock/components/NotificationPopover";

const SearchBar = ({ func }) => {
  const [searchValue, setSearchValue] = useState("");

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
      <div className="flex items-center rounded-full bg-white p-2 shadow-xl">
        <input
          type="text"
          id="search"
          placeholder="Buscar"
          className="mx-2 p-2"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
      <NotificationPopover />
    </div>
  );
};

export default SearchBar;
