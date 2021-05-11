import React from "react";
import Text from "./Text";
import Title from "./Title";

const Button = ({
  variant = "primary",
  className,
  content,
  color = "#000",
  onHandleButtonClick,
}) => (
  <button
    onClick={onHandleButtonClick}
    className={`btn btn--${variant} ${className}`}
  >
    <Text color={color} variant="tertiary-1" content={content} />
  </button>
);

export default Button;
