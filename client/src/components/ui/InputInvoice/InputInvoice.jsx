import * as React from "react";

import { cn } from "@/utils/cn";

const InputInvoice = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-b border-[#606060BA] text-textColor focus:outline-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
InputInvoice.displayName = "InputInvoice";

export { InputInvoice };
