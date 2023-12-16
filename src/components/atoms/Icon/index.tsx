// lib
import { MouseEvent } from "react";
import feather, { FeatherIconNames } from "feather-icons";
// local
import { cn } from "@/libs/utils";

interface IconProps {
  name: FeatherIconNames;
  size?: number;
  color?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  className?: string;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
  onClick,
  className,
  fill = "transparent",
}) => {
  const svg = feather.icons[name].toSvg({
    width: size,
    height: size,
    color,
    fill,
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      onClick={onClick}
      className={cn([className])}
    />
  );
};

export default Icon;
