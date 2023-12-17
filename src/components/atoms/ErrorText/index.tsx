// lib
import { FC } from "react";

interface ErrorTextProps {
  value: string;
}

const ErrorText: FC<ErrorTextProps> = ({ value }) => {
  return <p className="text-sm text-red-500">{value}</p>;
};

export default ErrorText;
