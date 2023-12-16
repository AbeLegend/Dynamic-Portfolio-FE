// lib
import { FC, InputHTMLAttributes } from "react";
// local
import { cn } from "@/libs/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ placeholder, className, ...props }) => {
  return (
    <input
      className={cn([
        "py-4 px-3 border border-gray-100/30 rounded-lg focus:outline-none placeholder:underline placeholder:text-gray-100",
        className,
      ])}
      {...props}
      placeholder={placeholder}
    />
  );
};

export default Input;
