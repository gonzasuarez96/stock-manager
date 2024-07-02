"use client";
import ProviderTable from "./components/ProviderTable";
import SearchInput from "./components/SearchInput";
import FilterInput from "./components/FilterInput";
import AddProviderButton from "./components/AddProvider";
import NotificationPopover from "../stock/components/NotificationPopover";
import { useState } from "react";

export default function Provider() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearch = (searchValue) => {
    if (searchValue !== "") {
      setSearchValue(searchValue);
    }
  };

  const handleSelect = (selectedOption) => {
    if (selectedOption !== "") {
      setSelectedOption(selectedOption);
    }
  };

  return (
    <div>
      <div className="align-center flex flex-row justify-evenly p-[1rem]">
        <SearchInput handleSearch={handleSearch} />
        <FilterInput handleSelect={handleSelect} />
        <AddProviderButton />
        <NotificationPopover />
      </div>
      <ProviderTable
        searchValue={searchValue}
        selectedOption={selectedOption}
      />
    </div>
  );
}
