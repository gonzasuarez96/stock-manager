import React from "react";
import Image from "next/image";

export const CardArticles = ({ article }) => {
  return (
    <div className="h-[13.32056rem] w-[13.32056rem] rounded-[0.875rem] bg-white p-5 shadow-md">
      <Image src={article?.image} width={200} height={200} alt="" />
      <h2 className="font-bold">{article?.title}</h2>
      <span className="font-semibold">Cod. {article?.code}</span>
    </div>
  );
};
