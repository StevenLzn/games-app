"use client";
import { IconButtonContainer } from "./IconButtonStyles";

export type ButtonProps = {
  // Tipo de dato personalizado
  onClick: () => void;
  primary?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
};

const IconButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary,
  disabled,
}) => {
  return (
    <IconButtonContainer
      onClick={onClick}
      disabled={disabled}
      primary={primary}
    >
      {children}
    </IconButtonContainer>
  );
};

export default IconButton;
