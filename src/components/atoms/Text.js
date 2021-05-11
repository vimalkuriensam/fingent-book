import React from "react";

const Text = ({
  variant = "primary-1",
  content,
  color = "#000",
  className,
}) => {
  return (
    <div className={`text-${variant} ${className}`} style={{ color }}>
      {content}
    </div>
  );
};

export default Text;
