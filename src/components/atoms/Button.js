import React from "react";
import Text from "./Text";
import Title from "./Title";

const Button = ({
  variant = "primary",
  className,
  content,
  onHandleButtonClick,
}) => (
  <button
    onClick={onHandleButtonClick}
    className={`btn btn--${variant} ${className}`}
  >
    <Text variant="tertiary-1" content={content} />
  </button>
);

export default Button;
