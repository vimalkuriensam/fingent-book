import React from "react";

const Title = ({ variant = "primary-1", content, color, className }) => {
  return (
    <div className={`heading-${variant} ${className}`} style={{ color }}>
      {content}
    </div>
  );
};

export default Title;
