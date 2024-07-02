import React from "react";
import { cn } from "@/utils/cn";

export const Label = ({ id, label, className }) => {
  return (
    <label
      htmlFor={id}
      className={cn("text-base font-medium text-slate-900", className)}
    >
      {label}
    </label>
  );
};
