import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      base: "text-base font-normal",
      title: "text-2xl font-bold text-gray-900",
      formTitle: "text-[4.0625rem] font-bold text-[#094B63]",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
