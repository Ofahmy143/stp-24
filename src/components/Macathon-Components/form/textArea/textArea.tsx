import "./textArea.css";

const EssayInput = ({ question, name }: { question: string; name: string }) => {
  return (
    <textarea name={name} placeholder={question} className="textAreaMacathon" />
  );
};

export default EssayInput;
