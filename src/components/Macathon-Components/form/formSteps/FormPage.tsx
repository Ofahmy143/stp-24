import { MacathonFormData } from "../../../../types/macathon-form-data";
import "../form.css";
import { PageQuestion } from "../questions";
import { WorkshopParticipant } from "../workshop.questions";
import { getGeneralInputField } from "./getQuestions";
import { DataType } from "./setInputValue";
type formPageProps = {
  formData: MacathonFormData | WorkshopParticipant;
  questions: PageQuestion[];
  updateFields: (fields: Partial<DataType>) => void;
};
function FormPage({ formData, questions, updateFields }: formPageProps) {
  return (
    <div className="QuesContainer">
      <div className="formQuestions">
        {questions.map((question: PageQuestion) => {
          return getGeneralInputField({ formData, question, updateFields });
        })}
      </div>
    </div>
  );
}

export default FormPage;
