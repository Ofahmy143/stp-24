import "./InputField.css";
import React, { useEffect } from "react";
import { addClassHasValue } from "./inputField";
const GenericInput = ({
  question,
  name,
  type,
  value,
  onChange,
}: {
  question: string;
  name: string;
  type: string;
  value: string | number;
  onChange: () => void;
}) => {
  useEffect(() => {
    addClassHasValue();
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="inputBox">
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        className="InputFieldMacathon"
      />
      <span>{question}</span>
    </div>
  );
};

export default GenericInput;
