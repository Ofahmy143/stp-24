import { DataType } from "../formSteps/setInputValue";
import "./InputField.css";
import  { useEffect } from "react";

const GenericInput = ({
  question,
  name,
  type,
  value,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange,
}: {
  question: string;
  name: string;
  type: string;
  value: string | number| undefined;
  onChange: (update: Partial<DataType>) => void;
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onChange({ [name]: value });
}
  useEffect(() => {
    const emailInput: HTMLInputElement | null = document.getElementById(
      "email"
    ) as HTMLInputElement | null;

    emailInput?.addEventListener("input", function () {
      if (emailInput?.value.trim() !== "") {
        emailInput?.classList.add("has-value");
      } else {
        emailInput.classList.remove("has-value");
      }
    });
  }, []); // Empty dependency array ensures this effect runs once after the initial render



  return (
    <div className="inputBox">
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        id={name}
        className="InputFieldMacathon"
      />
      <span>{question}</span>
    </div>
  );
};

export default GenericInput;
