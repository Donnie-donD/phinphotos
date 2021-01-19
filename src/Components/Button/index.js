import React from "react";
import "./Button.css";

const estilos = ["btn--primary", "btn--outline"];

const tamanhos = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const cores = ["primary", "red", "blue", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = estilos.includes(buttonStyle)
    ? buttonStyle
    : estilos[0];

  const checkButtonSize = tamanhos.includes(buttonSize)
    ? buttonSize
    : tamanhos[0];

  const checkButtonColor = cores.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
