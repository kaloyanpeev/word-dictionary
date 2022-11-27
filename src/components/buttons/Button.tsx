import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  text: string;
  onClick?: Function;
  color?: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, color, disabled }) => {
  return (
    <StyledButton
      color={color || "white"}
      onClick={() => onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
