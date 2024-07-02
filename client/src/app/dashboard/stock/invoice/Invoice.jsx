import React, { useEffect, useState } from "react";
import data from "../components/data";
import { InputInvoice, Label } from "@/components/ui";
import { CheckIcon } from "../../../../../public/svg";
import useStore from "@/lib/store";
import { useCurrentDate } from "@/hooks/useCurrentDate";
import Logo from "../../../../../public/logo/logo";
import { useRouter } from "next/navigation";
import axios from "axios";

const ExampleTable = ({ selectedOption, selectedCode }) => {
  const [emitido, setEmitido] = useState(true);
  const [pendiente, setPendiente] = useState(false);
  const [pendienteData, setPendienteData] = useState(false);
  const [pagado, setPagado] = useState(false);
  const { articleQuantities, selectedArticles, articles } = useStore();
  const { year, month, day } = useCurrentDate();
  const router = useRouter();

  const bill = {
    id_user: 5,
    id_provider: null,
    description: null,
  };

  const article = {};
  selectedArticles.forEach((articleId) => {
    const selectedArticle = articles.find(
      (article) => article.id === articleId,
    );
    article[articleId] = {
      quantity: articleQuantities[articleId],
      id_article: articleId,
    };
  });

  // Aquí puedes usar el objeto bill y article según tus necesidades
  console.log("Bill:", bill);
  console.log("Article:", article);

  const selectedArticlesInfo = selectedArticles.map((articleId) => {
    const selectedArticle = articles.find(
      (article) => article.id === articleId,
    );
    return {
      id: articleId,
      quantity: articleQuantities[articleId],
      details: selectedArticle,
    };
  });

  const handleClick = async () => {
    try {
      // Crear el objeto bill
      const bill = {
        id_user: 5,
        id_provider: null,
        description: null,
      };

      // Crear el objeto article
      const article = {};
      selectedArticles.forEach((articleId) => {
        const selectedArticle = articles.find(
          (article) => article.id === articleId,
        );
        article[articleId] = {
          quantity: articleQuantities[articleId],
          id_article: articleId,
        };
      });

      // Realizar la solicitud HTTP utilizando Axios
      const response = await axios.post(
        "https://s12-16-ft-php-next-production.up.railway.app/api/bill/createArticle",
        {
          bill,
          article,
        },
      );

      // Manejar la respuesta según tus necesidades
      console.log("Respuesta del servidor:", response.data);
      setPendienteData(true);

      // Resto de tu lógica...
    } catch (error) {
      // Manejar errores
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    const data = () => {
      const pagadoData = false;

      if (pendienteData) {
        setEmitido(false);
        setPendiente(true);
        router.refresh();
        router.push("/dashboard/stock");
      }
      if (pagadoData) {
        setEmitido(false);
        setPendiente(false);
        setPagado(true);
      }
    };

    data();
  }, [pendienteData, router]);

  // Este componente deberia recibir por props data que seria el array con todos los elementos de la tabla
  // por ahora se importa un json data que simula ser este
  let filteredData = selectedOption
    ? data.filter((item) => item.category.name === selectedOption)
    : data;

  // Filtrar por código si se proporciona selectedCode
  filteredData = selectedCode
    ? data.filter((item) => item.selectedCode === selectedCode)
    : filteredData;

  return (
    <div className="my-5 flex h-[100vh] text-textColor">
      <div className="w-full rounded-[0.9375rem] border bg-white px-16 py-5 shadow-lg">
        <div className="flex justify-between">
          <div className="ml-5 mt-8">
            <Logo />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-[1.75rem] font-semibold uppercase">
                Factura
              </h2>
              <p className="text-2xl font-light">N° 0001-000</p>
            </div>
            <div className="flex">
              <span className="text-[0.9375rem] uppercase">Fecha</span>
              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  value={year}
                  className="h-[2.7rem] w-[3.7rem] rounded-[0.625rem] border-[0.5px] border-greenBg text-center shadow-md outline-none"
                />
                <input
                  type="text"
                  value={month}
                  className="h-[2.7rem] w-[3.7rem] rounded-[0.625rem] border-[0.5px] border-greenBg text-center  shadow-md outline-none"
                />
                <input
                  type="text"
                  value={day}
                  className="h-[2.7rem] w-[3.7rem] rounded-[0.625rem] border-[0.5px] border-greenBg text-center  shadow-md outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Label
            id="client"
            label="Cliente:"
            className="text-[0.9375rem] font-semibold uppercase text-textColor"
          />
          <InputInvoice id="client" type="text" />
        </div>
        <div className="mb-10 mt-5 flex justify-between">
          <div className="flex gap-2">
            <Label
              id="cuit"
              label="C.U.I.T. N°:"
              className="text-[0.9375rem] font-semibold uppercase text-textColor"
            />
            <InputInvoice id="client" type="text" />
          </div>
          <div className="flex gap-2">
            <Label
              id="locality"
              label="Localidad:"
              className="text-[0.9375rem] font-semibold uppercase text-textColor"
            />
            <InputInvoice id="client" type="text" />
          </div>
        </div>
        <table className="min-w-full divide-y divide-[#606060BA] border-b border-t border-[#606060BA]">
          <thead>
            <tr className="text-[#094B63] ">
              <th
                scope="col"
                className="border-r border-[#606060BA] py-1 text-center text-[0.9375rem] font-light tracking-wider"
              >
                Código
              </th>
              <th
                scope="col"
                className="border-r border-[#606060BA] px-10 py-1 text-center text-[0.9375rem] font-light tracking-wider"
              >
                Detalles
              </th>
              <th
                scope="col"
                className="px-6 py-1 text-center text-[0.9375rem] font-light tracking-wider"
              >
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Fila 1 */}
            {selectedArticlesInfo.map((item) => (
              <tr key={item.id}>
                <td className="whitespace-nowrap border-r border-[#606060BA] px-4 py-2">
                  {item.details.code}
                </td>
                <td className="whitespace-nowrap border-r border-[#606060BA] px-4 py-2">
                  {item.details.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-5 flex gap-2">
          <Label
            id="transportationCompany"
            label="Empresa de transporte:"
            className="text-[0.9375rem] font-semibold uppercase text-textColor"
          />
          <InputInvoice id="client" type="text" />
        </div>
        <div className="flex justify-between gap-5">
          <div className="w-[70%]">
            <div className="my-5 flex justify-between">
              <div className="flex gap-2">
                <Label
                  id="residence"
                  label="Domicilio:"
                  className="text-[0.9375rem] font-semibold uppercase text-textColor"
                />
                <InputInvoice id="client" type="text" />
              </div>
              <div className="flex gap-2">
                <Label
                  id="signature"
                  label="Firma:"
                  className="text-[0.9375rem] font-semibold uppercase text-textColor"
                />
                <InputInvoice id="client" type="text" />
              </div>
            </div>
            <div className="my-5 flex justify-between">
              <div className="flex gap-2">
                <Label
                  id="cuit"
                  label="C.U.I.T. N°:"
                  className="text-[0.9375rem] font-semibold uppercase text-textColor"
                />
                <InputInvoice id="client" type="text" />
              </div>
            </div>
          </div>
          <div className="flex w-[30%] flex-col gap-5 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-[0.9375rem] uppercase">Valor Venta:</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="h-[2.7rem] w-[143px] rounded-[0.625rem] border-[0.5px] border-greenBg text-center shadow-md outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[0.9375rem] uppercase">Valor Total:</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="h-[2.7rem] w-[143px] rounded-[0.625rem] border-[0.5px] border-greenBg text-center shadow-md outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 flex h-full flex-col items-center justify-center">
        <div className="mb-16">
          <button
            onClick={handleClick}
            className="rounded-full bg-[#88ed9e] px-5 py-1 font-semibold text-white hover:bg-[#68b779]"
          >
            Guardar
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div
            className={`flex flex-col items-center gap-1 ${
              !emitido ? "opacity-60" : ""
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#316EDE] bg-[#8BB6FF] p-1 shadow-md">
              <CheckIcon fill="#094B63" />
            </div>
            <span className="font-semibold uppercase">Emitido</span>
          </div>
          <div className="h-[4.5625rem] w-[1px] bg-[#606060BA]"></div>
          <div
            className={`flex flex-col items-center gap-1 ${
              pagado ? "opacity-80" : pendiente ? "" : "opacity-80"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FCD778] p-1 shadow-md ${
                pagado
                  ? "bg-[#fcd778]"
                  : pendiente
                    ? "bg-[#fcd778]"
                    : "bg-[#FCD77833]"
              }`}
            >
              {pagado ? (
                <CheckIcon fill="#C37500" />
              ) : pendiente ? (
                <CheckIcon fill="#C37500" />
              ) : (
                ""
              )}
            </div>
            <span className="font-semibold uppercase">Pendiente</span>
          </div>
          <div className="h-[4.5625rem] w-[1px] bg-[#606060BA]"></div>
          <div
            className={`flex flex-col items-center gap-1 ${
              pagado ? "" : "opacity-80"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#88ED9E] bg-[#88ED9E33] p-1 shadow-md ${
                pagado ? "bg-[#88ed9e]" : "bg-[#88ED9E33]"
              }`}
            >
              {pagado ? <CheckIcon fill="#087C22" /> : ""}
            </div>
            <span className="font-semibold uppercase">Pagado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleTable;
