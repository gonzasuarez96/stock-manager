import React, { forwardRef } from "react";
import { buttonVariants } from "./styles";
import { cn } from "@/utils/cn";

const Button = forwardRef(
  ({ className, variant, link, children, type, ...props }, ref) => {
    if (link) {
      return (
        <div className={cn(buttonVariants({ variant, className }))}>
          {children}
        </div>
      );
    }
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
export { Button };
