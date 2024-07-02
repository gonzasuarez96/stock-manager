import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchInput = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  const searchInputValue = () => {
    handleSearch(searchValue);
  };

  return (
    <div className="flex items-center rounded-full bg-white p-2 shadow-md">
      <input
        type="text"
        id="search"
        placeholder="Buscar cuit"
        className="mx-2 p-2"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button onClick={searchInputValue}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
