import React, { useEffect } from "react";
// import data from "./data";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useStore from "@/lib/store";
import { useRouter } from "next/navigation";

const ExampleTable = ({ selectedOption, selectedCode, showCheckbox }) => {
  const router = useRouter();
  const {
    articles,
    currentPage,
    totalPages,
    fetchArticles,
    toggleArticleSelection,
    selectedArticles,
  } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      await fetchArticles(currentPage);
      router.push(`/dashboard/stock?page=${currentPage}`);
    };

    fetchData();
  }, [currentPage, router]);

  console.log("codigo:");
  // Este componente deberia recibir por props data que seria el array con todos los elementos de la tabla
  // por ahora se importa un json data que simula ser este
  let filteredData = selectedOption
    ? articles.filter((item) => item.category.name === selectedOption)
    : articles;

  // Filtrar por código si se proporciona selectedCode
  filteredData = selectedCode
    ? filteredData.filter((item) => item.code === selectedCode)
    : filteredData;

  const handlePageChange = (event, value) => {
    useStore.setState({ currentPage: value });
  };

  const theme = createTheme({
    palette: {
      green: {
        main: "#167C8A",
      },
    },
  });

  console.log(filteredData);

  return (
    <div className="h-screen p-5 text-textColor">
      <div
        className="rounded-lg border bg-white p-5 shadow-lg"
        style={{ height: "80vh" }} // Altura fija de 400px
      >
        <h1 className="mb-2 p-3 text-xl font-bold">Stock</h1>

        <table className="w-full">
          <thead className="border-b-2">
            <tr className="text-textTitleColor">
              {showCheckbox && (
                <th className="w-5 p-3 text-left text-sm tracking-wide"> </th>
              )}
              <th className="w-24 p-3 text-left text-sm tracking-wide">
                Artículo
              </th>
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
                {/* <td className="flex w-32 justify-center px-4 py-2">
                  <img
                    src={
                      item.article ||
                      "https://www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png"
                    }
                    alt="Artículo"
                    className="flex h-20 w-20 justify-center rounded-2xl shadow-lg"
                  />
                </td> */}
                {showCheckbox && (
                  <td className="w-5 whitespace-nowrap p-3 text-sm">
                    <input
                      type="checkbox"
                      checked={
                        selectedArticles && selectedArticles.includes(item.id)
                      }
                      onChange={() => toggleArticleSelection(item.id)}
                    />
                  </td>
                )}
                <td className="w-24 whitespace-nowrap p-3 text-sm">
                  {item.name}
                </td>
                <td className="w-24 whitespace-nowrap p-3 text-sm">
                  {item.code}
                </td>
                <td className="max-w-[250px] break-all p-3 text-sm">
                  {item.description}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  <div
                    className={`flex h-[34px] w-[120px] items-center justify-center rounded-3xl border-2 font-bold border-${item.category.color}`}
                    style={{
                      backgroundColor: `${item.category.color}50`,
                      borderColor: `${item.category.color}`, // Establecer el color del borde aquí
                    }}
                  >
                    {item.category.name}
                  </div>
                </td>

                <td className="whitespace-nowrap p-3 text-sm">
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <Pagination
            count={totalPages}
            page={currentPage}
            color="primary"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ExampleTable;
