
import { PageQuestion,QuestionTypeEnum } from "../questions";
import GenericInput from "../InputField/inputField";
import EssayInput from "../textArea/textArea";

function getInputField(question: PageQuestion) {
  return question.type !== QuestionTypeEnum.ESSAY ? (
    <GenericInput
      question={question.question}
      name={question.name}
      type={question.type}
    ></GenericInput>
  ) : (
    //This should bw essay input but keep it like this temporarily
    <EssayInput question={question.question} name={question.name}></EssayInput>
  );
}

export default getInputField;
