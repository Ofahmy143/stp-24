import "../form.css";
import { questions, PageQuestion } from "../questions";
import FormTitle from "../formTitle/formTitle";
import getInputField from "./getQuestions";
import { MacathonFormData } from "../../../../types/macathon-form-data";

type formThreeProps = {
  data: MacathonFormData;
  updateFields: (fields: Partial<MacathonFormData>) => void;
};
function ThirdFormPage({ data, updateFields }: formThreeProps) {
  return (
    <>
      {data.teamRole !== "" ? (
        <FormTitle title={data.teamRole}></FormTitle>
      ) : (
        <div></div>
      )}
      <div className="QuesContainer">
        <div className="formQuestions">
          {questions["SecondPageQuestions"].pageQuestions.map(
            (question: PageQuestion) => getInputField({ question, data,updateFields })
          )}
        </div>
      </div>
    </>
  );
}

export default ThirdFormPage;
