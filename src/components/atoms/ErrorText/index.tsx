// lib
import { cn } from "@/libs/utils";
import { FC } from "react";

interface ErrorTextProps {
  value: string | undefined;
  className?: string;
}

const ErrorText: FC<ErrorTextProps> = ({ value, className }) => {
  return <p className={cn(["text-sm text-red-500", className])}>{value}</p>;
};

export default ErrorText;
