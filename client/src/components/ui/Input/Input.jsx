import * as React from "react";

import { cn } from "@/utils/cn";

const Input = React.forwardRef(
  ({ className, type, isError = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "relative mt-[1.625rem] box-border inline-block h-[4.25rem] w-[30.8125rem] max-w-[30.8125rem] overflow-visible rounded-full bg-white px-3 py-[0.6875rem] pl-[2.1875rem] text-base font-medium text-[#272b41] shadow-[3px_5px_4px_0px_rgba(9,75,99,0.35)] outline-none transition-all duration-300 hover:border-blue-500 focus:ring-1 focus:ring-blue-500/50",
          className,
          isError &&
            "border-red-300 hover:border-red-500 focus:ring-red-500/50",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
