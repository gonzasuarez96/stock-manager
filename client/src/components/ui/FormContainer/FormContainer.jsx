import React from "react";
import { cn } from "@/utils/cn";

export const FormContainer = ({ children, className, login }) => {
  return (
    <div
      className={cn(
        "z-10 flex w-[90%] max-w-[40.375rem] flex-col items-center rounded-[3.75rem] bg-white bg-opacity-[.55] p-7",
        login ? "h-[42.9375rem]" : "h-[45.8125rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};
