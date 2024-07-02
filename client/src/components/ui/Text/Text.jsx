import { textVariants } from "./styles";
import { cn } from "@/utils/cn";

const createText = (variant) => {
  switch (variant) {
    case "base":
      return "p";
    case "title":
      return "h1";
    case "formTitle":
      return "h1";
    default:
      throw new Error("Text Variant not supported");
  }
};
export const Text = ({ className, variant = "body", ...props }) => {
  const TextElement = createText(variant);
  return (
    <TextElement
      className={cn(textVariants({ variant, className }))}
      {...props}
    />
  );
};
