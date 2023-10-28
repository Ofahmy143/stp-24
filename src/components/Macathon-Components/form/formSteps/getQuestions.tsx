import { PageQuestion, QuestionTypeEnum } from "../questions";
import GenericInput from "../InputField/inputField";
import TextAreaQuestion from "../textArea/textArea";
import { MacathonFormData } from "../../../../types/macathon-form-data";
import { GetVal, setInput } from "./setInputValue";
import SelectInput from "../selectInput/selectInput";
type getInputFieldProps = {
  question: PageQuestion;
  data: MacathonFormData;
  updateFields: (fields: Partial<MacathonFormData>) => void;
};

function getInputField({ question, data, updateFields }: getInputFieldProps) {
  const name = question.name;
  const val = GetVal(data, name);

  return question.type === QuestionTypeEnum.ESSAY ? (
    <TextAreaQuestion
      question={question.question}
      name={question.name}
      onChange={setInput(updateFields, name)}
      value={val}
    ></TextAreaQuestion>
  ) : question.type === QuestionTypeEnum.SELECT ? (
    <SelectInput
      question={question.question}
      onChange={setInput(updateFields, name)}
      name={question.name}
      value={val}
      choices={question.choices}
    />
  ) : (
    <GenericInput
      question={question.question}
      name={question.name}
      type={question.type}
      value={val}
      onChange={setInput(updateFields, name)}
    ></GenericInput>
    //This should bw essay input but keep it like this temporarily
  );
}

export default getInputField;
