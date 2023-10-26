import { MacathonFormData } from "../../../../types/macathon-form-data";
import "./InputField.css";

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
  onChange:()=>void
}) => {
  return (
    <input
      required
      name={name}
      type={type}
      value={value}
      placeholder={question}
      onChange={onChange}
      className="InputFieldMacathon"
    />
  );
};

export default GenericInput;
