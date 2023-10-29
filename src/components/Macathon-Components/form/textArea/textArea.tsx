import { DataType } from "../formSteps/setInputValue";
import "./textArea.css"
const TextAreaInput = ({
  question,
  name,
  onChange,
  value,
}: {
  question: string;
  name: string;
  onChange: (update: Partial<DataType>) => void;
  value: string | number| undefined;
}) => {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    onChange({ [name]: value });
}
  return (
    <div className="textAreaBox">
      <textarea
        required
        name={name}
        value={value}
        onChange={handleChange}
        className="TextAreaMacathon"
      />
      <span>{question}</span>
    </div>
  );
};

export default TextAreaInput;
