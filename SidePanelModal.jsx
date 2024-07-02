import React from "react";
import { ModalButton } from "../../../../../public/svg";
import Image from "next/image";

export const SidePanelModal = ({ isOpen, onClose }) => {
  const products = [
    {
      img: "https://res.cloudinary.com/dlfwgaprv/image/upload/v1701375923/ejemplos/cinta_y1uyxo.png",
      description: "Cinta de Embalaje Marron 48mmx40mts",
      code: "00009372",
      stock: 10,
    },
    {
      img: "https://res.cloudinary.com/dlfwgaprv/image/upload/v1701375923/ejemplos/cinta_y1uyxo.png",
      description: "Cinta de Embalaje Marron 48mmx40mts",
      code: "00009372",
      stock: 10,
    },
    {
      img: "https://res.cloudinary.com/dlfwgaprv/image/upload/v1701375923/ejemplos/cinta_y1uyxo.png",
      description: "Cinta de Embalaje Marron 48mmx40mts",
      code: "00009372",
      stock: 10,
    },
  ];

  const panelClasses = `fixed top-0 right-0 h-full w-[21rem] bg-white shadow-md transform transition-transform ease-in-out duration-300 rounded-l-lg ${
    isOpen ? "translate-x-0" : "translate-x-[22.7rem]"
  }`;

  return (
    <div className={panelClasses}>
      <div className="relative flex h-full w-full items-center">
        <div className="flex h-full w-full flex-col justify-between p-8">
          <div className="flex h-full flex-col justify-center gap-5">
            {products.map((prod) => (
              <div
                key={prod.description}
                className="flex items-center text-textColor"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={prod.img}
                    width={50}
                    height={50}
                    alt=""
                    className="h-[2.875rem] w-[2.875rem] rounded-lg bg-white shadow-md"
                  />
                  <div>
                    <span className="text-[0.6875rem] font-light">
                      {prod.code}
                    </span>
                    <p className="text-xs font-semibold">{prod.description}</p>
                  </div>
                </div>
                <select
                  id="select"
                  className="cursor-pointer rounded-md border border-gray-300 px-3 py-1 text-xs font-semibold shadow-md outline-none"
                >
                  {[...Array(prod.stock)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <button className="rounded-full bg-[#167C8A] py-3 font-semibold text-white">
            Generar remito
          </button>
        </div>
        <button onClick={onClose} className="absolute -left-[50px]">
          <ModalButton />
        </button>
      </div>
    </div>
  );
};
