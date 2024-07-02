import React from "react";
import { ModalButton } from "../../../../../public/svg";
import Image from "next/image";
import Link from "next/link";
import useStore from "@/lib/store";

export const SidePanelModal = ({ isOpen, onClose }) => {
  const { articles, selectedArticles, updateArticleSelection } = useStore();

  const selectedProducts = articles.filter(
    (item) => selectedArticles && selectedArticles.includes(item.id),
  );

  const handleSelectChange = (e, item) => {
    // Manejar cambios en el select
    console.log("Select value:", e.target.value);
    const quantity = parseInt(e.target.value, 10);
    const articleId = item.id;
    updateArticleSelection(articleId, quantity);
  };

  const panelClasses = `fixed top-0 right-0 h-full w-[21rem] bg-white shadow-md transform transition-transform ease-in-out duration-300 rounded-l-lg z-50 ${
    isOpen ? "translate-x-0" : "translate-x-[25rem]"
  }`;

  return (
    <div className={panelClasses}>
      <div className="relative flex h-full w-full items-center">
        <div className="flex h-full w-full flex-col justify-between p-8">
          <div className="flex h-full flex-col justify-center gap-5">
            {selectedProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-textColor"
              >
                <div className="flex items-center gap-2">
                  {/* <Image
                    src="https://res.cloudinary.com/dlfwgaprv/image/upload/v1702755485/ejemplos/image_not_available_ca6tou.png"
                    width={50}
                    height={50}
                    alt=""
                    className="h-[2.875rem] w-[2.875rem] rounded-lg bg-white shadow-md"
                  /> */}
                  <div>
                    <span className="text-lg font-semibold">{item.name}</span>
                    <p className="text-xs font-light">{item.description}</p>
                  </div>
                </div>
                <select
                  id="select"
                  className="cursor-pointer rounded-md border border-gray-300 px-3 py-1 text-xs font-semibold shadow-md outline-none"
                  onChange={(e) => handleSelectChange(e, item)}
                >
                  <option key="default" value="">
                    Cant.
                  </option>
                  {[...Array(item.quantity)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <Link href="stock/invoice" className="flex w-full justify-center">
            <buttom className="flex w-full justify-center rounded-full bg-greenBg py-2 font-semibold text-white hover:bg-hoverGreen">
              Generar remito
            </buttom>
          </Link>
        </div>
        <button onClick={onClose} className="absolute -left-[49px]">
          <ModalButton />
        </button>
      </div>
    </div>
  );
};
