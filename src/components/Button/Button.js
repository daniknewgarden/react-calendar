import React from "react";
//Styles
import "./Button.scss";

export const Button = ({ label, primary, onClick }) => {
  return (
    <button className={`button ${primary ? "primary" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
};
