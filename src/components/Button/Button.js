import React from "react";
//Styles
import "./Button.scss";

export const Button = ({ label, primary }) => {
  return (
    <button className={`button ${primary ? "primary" : ""}`}>{label}</button>
  );
};
