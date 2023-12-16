// lib
import { FC, MouseEvent, ReactNode } from "react";
// local
import { Icon } from "@/components/atoms";
import { publicSans } from "@/libs/fonts";

interface CardProps {
  children: ReactNode;
  title: string;
  className?: string;
  childrenClassName?: string;
  //
  isPortfolio?: boolean;
  isLastIndex?: boolean;
  handleClose?: (event: MouseEvent<HTMLDivElement>) => void;
  handleAdd?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Card: FC<CardProps> = ({
  children,
  title,
  className,
  childrenClassName,
  isPortfolio = false,
  isLastIndex = false,
  handleClose,
  handleAdd,
}) => {
  return (
    <div
      className={`px-6 py-9 rounded-xl shadow-portfolio-primary bg-white ${className}`}
    >
      <div className="flex justify-between mb-6">
        <h2 className={`${publicSans.className} underline font-semibold`}>
          {title}
        </h2>
        <div className="flex gap-x-6">
          <Icon name="minimize-2" color="#6C7074" className="cursor-pointer" />
          {isPortfolio && (
            <Icon
              name="x-circle"
              color="#6C7074"
              className="cursor-pointer"
              onClick={handleClose}
            />
          )}
          {isLastIndex && (
            <Icon
              name="plus"
              color="#6C7074"
              className="cursor-pointer"
              onClick={handleAdd}
            />
          )}
        </div>
      </div>
      <div className={childrenClassName}>{children}</div>
    </div>
  );
};

export default Card;
