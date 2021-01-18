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
  checkButtonStyle = estilos.includes(buttonStyle) ? buttonStyle : estilos[0];

  checkButtonSize = tamanhos.includes(buttonSize) ? buttonSize : buttonSize[0];

  checkButtonColor = cores.includes(buttonColor) ? buttonColor : buttonColor[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onclick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
