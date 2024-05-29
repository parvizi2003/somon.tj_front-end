import React, { useState } from "react";
import "./Dropdown.css";

export default function Dropdown({ options, fontSize, value, setValue }) {
  const [show, setShow] = useState(false);
  function handleClick(option) {
    setValue(option);
    setShow(false);
  }

  return (
    <div className="dropdown">
      <div
        className="dropdown__label"
        style={{
          fontSize: fontSize,
          paddingLeft: fontSize === "14px" ? "9px" : "12px",
          paddingLeft: fontSize === "21px" ? "43px" : "12px",
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        {value.name}
      </div>
      <ul
        className="dropdown__options"
        style={{
          display: show ? "block" : "none",
          fontSize: fontSize === "14px" ? "14px" : "16px",
        }}
      >
        {options.map((option) => (
          <li
            key={option.route}
            className="dropdown__option"
            onClick={() => handleClick(option)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
