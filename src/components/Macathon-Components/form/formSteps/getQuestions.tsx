import { PageQuestion, QuestionTypeEnum } from "../questions";
import GenericInput from "../InputField/inputField";
import TextAreaQuestion from "../textArea/textArea";
import { DataType } from "./setInputValue";
import SelectInput from "../selectInput/selectInput";
import { WorkshopParticipant } from "../workshop.questions";
import { MacathonFormData } from "../../../../types/macathon-form-data";
type getInputFieldProps = {
  question: PageQuestion;
  formData: MacathonFormData | WorkshopParticipant;
  // data: Partial<DataType>;
  updateFields: (fields: Partial<DataType>) => void;
};

// function getInputField({ question, data, updateFields }: getInputFieldProps) {
//   const name = question.name;
//   const val = GetVal(data, name);

//   return question.type === QuestionTypeEnum.ESSAY ? (
//     <TextAreaQuestion
//       question={question.question}
//       name={question.name}
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       onChange={setInput(updateFields, name)}
//       value={val}
//     ></TextAreaQuestion>
//   ) : question.type === QuestionTypeEnum.SELECT ? (
//     <SelectInput
//       question={question.question}
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       onChange={setInput(updateFields, name)}
//       name={question.name}
//       value={val}
//       choices={question.choices}
//     />
//   ) : (
//     <GenericInput
//       question={question.question}
//       name={question.name}
//       type={question.type}
//       value={val}
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       onChange={setInput(updateFields, name)}
//     ></GenericInput>
//     //This should bw essay input but keep it like this temporarily
//   );
// }

export function getGeneralInputField({
  formData,
  question,
  updateFields,
}: getInputFieldProps) {
  return question.type === QuestionTypeEnum.ESSAY ? (
    <TextAreaQuestion
      question={question.question}
      name={question.name}
      onChange={updateFields}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      value={formData[question.name]}
    ></TextAreaQuestion>
  ) : question.type === QuestionTypeEnum.SELECT ? (
    <SelectInput
      question={question.question}
      onChange={updateFields}
      name={question.name}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      value={formData[question.name]}
      choices={question.choices}
    />
  ) : (
    <GenericInput
      question={question.question}
      name={question.name}
      type={question.type}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      value={formData[question.name]}
      onChange={updateFields}
    ></GenericInput>
    //This should bw essay input but keep it like this temporarily
  );
}
