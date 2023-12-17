// lib
import { FC, MouseEvent, ReactNode, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
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
  handleClose?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Card: FC<CardProps> = ({
  children,
  title,
  className,
  childrenClassName,
  isPortfolio = false,
  handleClose,
}) => {
  // useAnimationControls
  const control = useAnimationControls();
  // useState
  const [isMinimize, setIsMinimize] = useState<boolean>(false);
  return (
    <div
      className={`px-6 py-9 rounded-xl shadow-portfolio-primary bg-white ${className}`}
    >
      <div className="flex justify-between mb-6">
        <h2 className={`${publicSans.className} underline font-semibold`}>
          {title}
        </h2>
        <div className="flex gap-x-6">
          {isMinimize ? (
            <Icon
              name="maximize-2"
              color="#6C7074"
              className="cursor-pointer"
              onClick={() => {
                setIsMinimize(false);
                control.start({
                  scale: 1,
                  display: "block",
                  transition: {
                    duration: 0.2,
                  },
                });
              }}
            />
          ) : (
            <Icon
              name="minimize-2"
              color="#6C7074"
              className="cursor-pointer"
              onClick={() => {
                setIsMinimize(true);
                control.start({
                  scale: 0,
                  transition: {
                    duration: 0.2,
                  },
                });
                control.start({
                  display: "none",
                  transition: {
                    delay: 0.2,
                    duration: 0.2,
                  },
                });
              }}
            />
          )}

          {isPortfolio && (
            <Icon
              name="x-circle"
              color="#6C7074"
              className="cursor-pointer"
              onClick={handleClose}
            />
          )}
        </div>
      </div>
      <motion.div className={childrenClassName} animate={control}>
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
