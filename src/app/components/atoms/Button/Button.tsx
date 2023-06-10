"use client";
import { ButtonContainer } from "./ButtonStyles";

// Tipo de dato personalizado
type ButtonProps = {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, icon, disabled }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
