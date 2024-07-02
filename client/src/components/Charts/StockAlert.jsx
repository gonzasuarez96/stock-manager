import React, { useEffect } from "react";
import useStore from "@/lib/store";
import { useRouter } from "next/navigation";

const ExampleTable = ({ selectedOption, selectedCode }) => {
  const router = useRouter();
  const { articles, fetchArticles } = useStore();

  // Llamada a useEffect solo en el montaje del componente
  useEffect(() => {
    const fetchData = async () => {
      await fetchArticles();
    };

    fetchData();
  }, []); // Quité [router] para solo llamarlo una vez en el montaje

  // Ordenar los artículos por cantidad de stock de menor a mayor
  const sortedArticles = [...articles].sort((a, b) => a.quantity - b.quantity);

  // Seleccionar los primeros 10 artículos
  const filteredData = sortedArticles.slice(0, 10);

  const getStockColor = (quantity) => {
    if (quantity <= 5) {
      return "#DA3833";
    } else if (quantity > 5 && quantity <= 30) {
      return "#F6AA10";
    } else {
      return "green";
    }
  };

  return (
    <div className="rounded-lg py-8 text-textTitleColor shadow-xl">
      <div className="rounded-lg border bg-white p-5 ">
        <h1 className="mb-2 p-3 text-xl font-extrabold">Alerta de Stock</h1>
        <button
          href="/dashboard/stock"
          className="float-right -mt-12 mb-5 rounded-xl bg-bg-custom px-4 py-2 font-bold text-textTitleColor"
        >
          Ingresar Stock
        </button>
        <table className="w-full">
          <thead className="border-b-2">
            <tr className="text-textTitleColor">
              <th className="p-3 text-left text-sm tracking-wide">Código</th>
              <th className="p-3 text-left text-sm tracking-wide">
                Descripción
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Categoría</th>
              <th className="p-3 text-left text-sm tracking-wide">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="w-24 whitespace-nowrap p-3 text-sm">
                  {item.code}
                </td>
                <td className="max-w-[250px] break-all p-3 text-sm">
                  {item.description}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  <div
                    className={`flex h-[34px] w-[120px] items-center justify-center rounded-3xl border-2 font-bold ${item.category.color}`}
                    style={{
                      backgroundColor: `${item.category.color}50`,
                      borderColor: `${item.category.color}`,
                    }}
                  >
                    {item.category.name}
                  </div>
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  <div
                    className={`flex h-[34px] w-[120px] items-center justify-center rounded-full border-2 font-bold ${getStockColor(
                      item.quantity,
                    )}`}
                    style={{
                      color: `${getStockColor(item.quantity)}`,
                    }}
                  >
                    {item.quantity}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExampleTable;
