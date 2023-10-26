import { PageQuestion, QuestionTypeEnum } from "../questions";
import GenericInput from "../InputField/inputField";
import EssayInput from "../textArea/textArea";
import { MacathonFormData } from "../../../../types/macathon-form-data";
import { GetVal } from "./setInputValue";

type getInputFieldProps = {
  question: PageQuestion;
  data: MacathonFormData;
  updateFields:(fields:Partial<MacathonFormData>)=>void
};

function getInputField({ question, data,updateFields }: getInputFieldProps) {
  const name = question.name;
  const val = GetVal(data, name);
  console.log(val);
  return question.type !== QuestionTypeEnum.ESSAY ? (
    <GenericInput
      question={question.question}
      name={question.name}
      type={question.type}
      value={val}
      onChange={updateFields}
    ></GenericInput>
  ) : (
    //This should bw essay input but keep it like this temporarily
    <EssayInput question={question.question} name={question.name}></EssayInput>
  );
}

export default getInputField;
