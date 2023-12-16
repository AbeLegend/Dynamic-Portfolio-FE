// lib
import { FC, TextareaHTMLAttributes } from "react";
// local
import { cn } from "@/libs/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
}

const Textarea: FC<TextareaProps> = ({ placeholder, className, ...props }) => {
  return (
    <textarea
      className={cn([
        "py-4 px-3 border border-gray-100/30 rounded-lg focus:outline-none placeholder:underline placeholder:text-gray-100 resize-y min-h-[128px]",
        className,
      ])}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;
