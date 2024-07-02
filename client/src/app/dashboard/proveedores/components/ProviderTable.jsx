"use client";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import useStore from "@/lib/store";

const ProviderTable = ({ searchValue, selectedOption }) => {
  const { providers, fetchProvider } = useStore();

  //filtering providers' data logic
  let filteredProviders = "";
  filteredProviders = searchValue
    ? providers.filter((provider) => provider.cuit.toString() === searchValue)
    : providers;

  console.log("filteredProviders", filteredProviders);
  console.log("searchValue", searchValue);

  filteredProviders = selectedOption
    ? providers.filter((provider) => provider.name === selectedOption)
    : providers;

  //function to fetch provider's data
  useEffect(() => {
    fetchProvider();
  }, []);

  // Lógica para la paginación
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="h-screen p-5 text-textColor">
      <div className="rounded-lg border bg-white p-5 shadow-lg">
        <table className="w-full">
          <thead className="border-b-2">
            <tr>
              <th className="w-24 p-3 text-left text-sm tracking-wide">
                Nombre
              </th>
              <th className="p-3 text-left text-sm tracking-wide">CUIT</th>
              <th className="p-3 text-left text-sm tracking-wide">Dirección</th>
              <th className="p-3 text-left text-sm tracking-wide">Localidad</th>
              <th className="p-3 text-left text-sm tracking-wide">Email</th>
              <th className="p-3 text-left text-sm tracking-wide">Tel:</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {filteredProviders.map((provider, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="w-24 whitespace-nowrap p-3 text-sm">
                  {provider.name}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {provider.cuit}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {provider.direction}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {provider.location}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {provider.email}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {provider.tel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <Pagination
            count={Math.ceil(providers.length / itemsPerPage)}
            page={page}
            color="primary"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
export default ProviderTable;
