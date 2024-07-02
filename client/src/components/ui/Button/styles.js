import { cva } from "class-variance-authority";

export const buttonVariants = cva("disabled:pointer-events-none", {
  variants: {
    variant: {
      base: " flex h-12 min-w-[12.8125rem] items-center justify-center rounded-lg border-blue-400 bg-blue-400 text-base font-medium text-white duration-300 hover:border-blue-300 hover:bg-blue-300",
      formSubmit:
        "mt-7 flex h-12 w-full min-w-[12.8125rem] items-center justify-center rounded-lg border-blue-400 bg-blue-400 text-lg font-semibold text-white duration-300 hover:border-blue-300 hover:bg-blue-300",
      authSubmit:
        "flex h-[3.5rem] w-[19.25rem] items-center justify-center rounded-full bg-[#FFC756] text-xl font-bold text-[#167C8A] shadow-[3px_6px_4px_0px_rgba(123,82,1,0.35)] duration-300 hover:bg-opacity-70",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
