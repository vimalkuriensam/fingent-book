import React, { useRef } from "react";

const Dropdown = ({
  className,
  data = [],
  value = "Filter by",
  onHandleClick,
}) => {
  const ref = useRef(null);
  const onDropdownClick = () => {
    ref.current.click();
  };
  return (
    <div className={`dropdown ${className}`}>
      <div onClick={onDropdownClick} className="dropdown__selected">
        <span>{value}</span>
        <span>&#9660;</span>
      </div>
      <input ref={ref} className="dropdown__checkbox" type="checkbox" />
      <div className="dropdown__values">
        <ul>
          {data.map((val, index) => (
            <li
              onClick={() => {
                onHandleClick(val);
                onDropdownClick();
              }}
              key={index}
            >
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
