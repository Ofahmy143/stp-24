import "./InputField.css";

const GenericInput = ({
  question,
  name,
  type,
}: {
  question: string;
  name: string;
  type: string;
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={question}
      className="InputFieldMacathon"
    />
  );
};

export default GenericInput;
