import "../form.css";
import { questions, PageQuestion } from "../questions";
import getInputField from "./getQuestions";
import { MacathonFormData } from "../../../../types/macathon-form-data";
type formTwoProps = {
  data: MacathonFormData;
  updateFields: (fields: Partial<MacathonFormData>) => void;
};
function SecondFormPage({ data, updateFields }: formTwoProps) {
  return (
    <div className="QuesContainer">
      <div className="formQuestions">
        {questions["FirstPageQuestions"].pageQuestions.map(
          (question: PageQuestion) =>
            getInputField({ question, data, updateFields })
        )}
      </div>
    </div>
  );
}

export default SecondFormPage;
