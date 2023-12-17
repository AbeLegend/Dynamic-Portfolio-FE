// lib
import { ButtonHTMLAttributes } from "react";
import { FeatherIconNames } from "feather-icons";
// local
import { Icon } from "@/components/atoms";
import { cn } from "@/libs/utils";
import { publicSans } from "@/libs/fonts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: FeatherIconNames;
  iconSize?: number;
  iconColor?: string;
  iconFill?: string;
  disabled?: boolean;
  buttonType?: "fill" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconSize = 24,
  iconColor = "#000",
  iconFill,
  disabled = false,
  buttonType = "fill",
  ...rest
}) => {
  const { onClick, className, ...buttonProps } = rest;

  return (
    <button
      onClick={onClick}
      {...buttonProps}
      className={cn([
        "py-2 px-2",
        "tablet:py-2 tablet:px-3",
        "laptop:py-[11px] laptop:px-[22px]",
        "rounded-lg font-bold bg-transparent border",
        buttonType === "fill" && "border-secondary bg-secondary text-secondary",
        buttonType === "outline" && "border-secondary text-secondary",
        disabled &&
          "disabled:bg-[#919EAB40] disabled:border-none disabled:text-gray-200 disabled:text-opacity-80",
        publicSans.className,
        className,
      ])}
      disabled={disabled}
    >
      <span className="flex items-center justify-center gap-x-2">
        {icon && (
          <Icon name={icon} color={iconColor} fill={iconFill} size={iconSize} />
        )}
        {children && children}
      </span>
    </button>
  );
};

export default Button;
