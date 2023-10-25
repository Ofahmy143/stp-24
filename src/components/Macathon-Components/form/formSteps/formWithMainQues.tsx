import "./form.css";
import { questions, PageQuestion } from "../questions";
import FormTitle from "../formTitle/formTitle";
import getInputField from "./getQuestions";


function FormWithAllQues({ title }: { title: string }) {
  return (
    <div className="formContainer">
      <form className="mainForm">
        {title !== "" ? <FormTitle title={title}></FormTitle> : <div></div>}
        <div className="formQuestions">
          {questions["MainQuestions"].pageQuestions.map(
            (question: PageQuestion) => getInputField(question)
          )}
        </div>
      </form>
    </div>
  );
}

export default FormWithAllQues;
