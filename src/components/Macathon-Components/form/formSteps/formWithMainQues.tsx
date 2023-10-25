import "../form.css";
import { questions, PageQuestion } from "../questions";
import FormTitle from "../formTitle/formTitle";
import getInputField from "./getQuestions";


function FormWithMainQues({title}:{title:string}) {
  return (
    <div className="QuesContainer">
        {title !== "" ? <FormTitle title={title}></FormTitle> : <div></div>}
       <div className="formQuestions">
          {questions["MainQuestions"].pageQuestions.map(
            (question: PageQuestion) => getInputField(question)
          )}
        </div>
    </div>
  );
}

export default FormWithMainQues;
