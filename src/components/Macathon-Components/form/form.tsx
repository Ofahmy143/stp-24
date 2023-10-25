import "./form.css";
import { questions, PageQuestion } from "./questions";
import GenericInput from "./InputField/inputField";

function MacathonForm() {
  function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit} className="mainForm">
      <div className="formTitle">{questions["mainPage"].title}</div>
      <div className="formQuestions">
        {questions["mainPage"].pageQuestions.map((question: PageQuestion) =>
          question.type !== "essay" ? (
            <GenericInput
              question={question.question}
              name={question.name}
              type={question.type}
            ></GenericInput>
          ) : (
            //This should bw essay input but keep it like this temporarily
            <GenericInput
              question={question.question}
              name={question.name}
              type={question.type}
            ></GenericInput>
          )
        )}
      </div>
    </form>
  );
}

export default MacathonForm;
