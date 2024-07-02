import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationPopover from "../components/NotificationPopover";

const Filters = ({ func }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearch = () => {
    func("", searchValue); // Se pasa solo el valor de búsqueda al componente Page
    console.log("Codigo:", searchValue);
  };

  return (
    <div className="flex justify-between gap-6">
      <div className="flex items-center rounded-full bg-white px-4 py-1 shadow-md">
        <input
          type="text"
          id="search"
          placeholder="Buscar..."
          className="w-96 outline-none"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch} className="text-[#094B6399]">
          <SearchIcon />
        </button>
      </div>

      <div className="flex gap-5 font-semibold">
        <button
          className="flex items-center rounded-full bg-yellowBg px-5 py-1 text-[#183154] shadow-md hover:bg-hoverYellow"
          // onClick={handleAddItem}
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          Enviar correo
        </button>

        <button
          className="flex items-center rounded-full bg-greenBg px-6 py-1 text-white shadow-md hover:bg-hoverGreen"
          // onClick={handleAddItem}
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          Imprimir
        </button>

        <button
          className="mr-8 flex items-center rounded-full bg-[#DA3833] px-8 py-1 text-white shadow-md hover:bg-[#c14f4b]"
          // onClick={handleGenerateReceipt}
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
        >
          PDF
        </button>
        <NotificationPopover />
      </div>
    </div>
  );
};

export default Filters;
