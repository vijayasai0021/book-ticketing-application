import React from "react";

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style,background:"gray-800" }}
        onClick={onClick}
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style,background:"gray-800" }}
        onClick={onClick}
      ></div>
    </>
  );
}
