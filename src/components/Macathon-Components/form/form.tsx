import "./.css";
import { questions, PageQuestion } from "./questions";
import GenericInput from "./InputField/inputField";

function Form() {
  function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit}>
      {questions["mainPage"].pageQuestions.map((question: PageQuestion) => (
        <GenericInput
          question={question.question}
          // regex={question.regex}
          name={question.name}
          type={question.type}
        ></GenericInput>
      ))}
    </form>
  );
}

export default Form;
