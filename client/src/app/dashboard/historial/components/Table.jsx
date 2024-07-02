"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";

const ExampleTable = ({ selectedCode, selectedOption }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [open, setOpen] = useState({});
  const router = useRouter();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s12-16-ft-php-next-production.up.railway.app/api/bill",
        );
        setBills(response.data.bills.data);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    };

    fetchData();
  }, []);

  const finalizeBill = async (billId) => {
    try {
      const response = await axios.put(
        `https://s12-16-ft-php-next-production.up.railway.app/api/bill/finalized/${billId}`,
      );
      // Actualizar el estado local o realizar otras acciones según sea necesario
      console.log("Bill finalized successfully:", response.data);
      router.reload();
    } catch (error) {
      console.error("Error finalizing bill:", error);
    }
  };

  let filteredData = [...bills];

  if (selectedCode) {
    filteredData = filteredData.filter(
      (item) => item.id.toString() === selectedCode.toString(),
    );
  }

  const sortByDate = () => {
    filteredData.sort((a, b) => {
      const dateA = new Date(a.date_ended);
      const dateB = new Date(b.date_ended);
      return dateA - dateB;
    });
  };

  const sortByType = () => {
    filteredData.sort((a, b) => {
      const typeA = a.id_provider ? "Ingreso" : "Venta";
      const typeB = b.id_provider ? "Ingreso" : "Venta";
      return typeA.localeCompare(typeB);
    });
  };

  const sortByStatus = () => {
    filteredData.sort((a, b) => {
      const statusA = a.status === 0 ? "Pendiente" : "Pagado";
      const statusB = b.status === 0 ? "Pendiente" : "Pagado";
      return statusA.localeCompare(statusB);
    });
  };

  const sortByUser = () => {
    filteredData.sort((a, b) => {
      const userA = a.user.name;
      const userB = b.user.name;
      return userA.localeCompare(userB);
    });
  };

  if (selectedOption === "fecha") {
    sortByDate();
  } else if (selectedOption === "tipo") {
    sortByType();
  } else if (selectedOption === "estado") {
    sortByStatus();
  } else if (selectedOption === "realizadaPor") {
    sortByUser();
  }

  const handleOpen = (itemId) => {
    setOpen((prevOpenStates) => ({
      ...Object.fromEntries(
        Object.keys(prevOpenStates).map((id) => [id, false]),
      ),
      [itemId]: !prevOpenStates[itemId],
    }));
  };

  return (
    <div className="h-screen p-5 text-textColor">
      <div
        className="rounded-lg border bg-white p-5 shadow-lg"
        style={{ height: "70vh" }}
      >
        <table className="w-full">
          <thead className="border-b-2">
            <tr className="text-textTitleColor">
              <th className="w-24 p-3 text-left text-sm tracking-wide">
                Numero
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Fecha</th>
              <th className="p-3 text-left text-sm tracking-wide">Hora</th>
              <th className="p-3 text-left text-sm tracking-wide">Tipo</th>
              <th className="p-3 text-left text-sm tracking-wide">
                Realizada por
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Estado</th>
              <th className="p-3 text-left text-sm tracking-wide"></th>{" "}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-textColor">
            {filteredData.slice(startIndex, endIndex).map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="whitespace-nowrap p-3 text-sm">{item.id}</td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {new Date(item.date_ended).toLocaleDateString()}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {new Date(item.date_ended).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {item.id_provider ? "Ingreso" : "Venta"}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {item.user.name}
                </td>
                <td className="whitespace-nowrap p-1 text-sm">
                  <div
                    className={`inline-block flex items-center justify-center rounded-3xl border border-2 p-2 font-bold ${
                      item.status === 0
                        ? "border-yellow-500"
                        : "border-green-500"
                    }`}
                    style={{
                      width: "100px",
                      backgroundColor:
                        item.status === 0
                          ? "rgba(255, 255, 0, 0.2)"
                          : "rgba(144, 238, 144, 0.5)",
                      borderColor:
                        item.status === 0
                          ? "rgba(255, 255, 0, 1)"
                          : "rgba(144, 238, 144, 1)",
                    }}
                  >
                    {item.status === 0 ? "Pendiente" : "Pagado"}
                  </div>
                </td>

                <td className="relative whitespace-nowrap p-1 text-sm">
                  <MoreVertIcon
                    onClick={() => handleOpen(item.id)}
                    className="cursor-pointer"
                  />
                  <div
                    className={`absolute right-[75px] top-2 z-50 flex w-44 flex-col gap-5 rounded-lg border bg-white p-5 shadow-lg ${
                      open[item.id] ? "" : "hidden"
                    }`}
                  >
                    <button className="rounded-full border-red-500 bg-red-200 px-8 py-2">
                      Ver Factura
                    </button>
                    <button
                      onClick={() => finalizeBill(item.id)}
                      className="rounded-full border-green-500 bg-green-200 px-8 py-2"
                    >
                      Finalizar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={page}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ExampleTable;
