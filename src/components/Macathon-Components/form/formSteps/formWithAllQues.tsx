import "../form.css";
import { questions, PageQuestion } from "../questions";
import FormTitle from "../formTitle/formTitle";
import getInputField from "./getQuestions";

function FormWithAllQues({ title }: { title: string }) {
  return (
    <>
      {title !== "" ? <FormTitle title={title}></FormTitle> : <div></div>}
      <div className="QuesContainer">
        <div className="formQuestions">
          {questions["MainQuestions"].pageQuestions.map(
            (question: PageQuestion) => getInputField(question)
          )}
          {questions["SubQuestions"].pageQuestions.map(
            (question: PageQuestion) => getInputField(question)
          )}
        </div>
      </div>
    </>
  );
}

export default FormWithAllQues;
