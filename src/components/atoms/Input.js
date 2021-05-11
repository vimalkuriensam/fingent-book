import React from "react";

const Input = ({
  className,
  placeholder = "input text",
  value = "",
  onInputChange,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onInputChange}
      value={value}
    />
  );
};

export default Input;
