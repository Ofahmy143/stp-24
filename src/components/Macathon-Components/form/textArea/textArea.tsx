import "./textArea.css"
const TextAreaInput = ({
  question,
  name,
  onChange,
  value,
}: {
  question: string;
  name: string;
  onChange: () => void;
  choices: string[] | undefined;
  value: string | number;
}) => {
  return (
    <div className="textAreaBox">
      <textarea
        required
        name={name}
        value={value}
        onChange={onChange}
        className="TextAreaMacathon"
      />
      <span>{question}</span>
    </div>
  );
};

export default TextAreaInput;
