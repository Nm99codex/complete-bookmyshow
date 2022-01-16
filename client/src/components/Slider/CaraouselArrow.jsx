import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgb(44 49 72)",
        borderRadius: "50%",
      }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgb(44 49 72)",
        borderRadius: "50%",
      }}
      onClick={props.onClick}
    />
  );
};