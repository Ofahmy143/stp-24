import "./form.css";
import MovingButton from "./movingButtons/movingButton";
import { ApplyMultiStepForm } from "./formSteps/multistepForm";
import SecondFormPage from "./formSteps/SecondFormPage";
import ThirdFormPage from "./formSteps/ThirdFormPage";
import { MacathonFormData } from "../../../types/macathon-form-data";
import { useState } from "react";
const InitialData: MacathonFormData = {
  fullName: "",
  email: "",
  teamName: "",
  teamRole: "Member",
  faculty: "",
  gradYear: 0,
  cv: "",
  university: "",
};

function MacathonForm() {
  const [data, setData] = useState(InitialData);
  
  function updateFields(fields: Partial<MacathonFormData>) {
    setData((previousData) => {
      return { ...previousData, ...fields };
    });
  }

  const { currentStepIdx, steps, goNext, goBack, isFirstStep, isLastStep } =
    ApplyMultiStepForm([
      <SecondFormPage data={data} updateFields={updateFields}></SecondFormPage>,
      <ThirdFormPage data={data} updateFields={updateFields}></ThirdFormPage>,
    ]);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    goNext();
  };

  return (
    <div className="Container">
      <form onSubmit={onSubmitHandler}>
        <div className="mainForm">
          {steps[currentStepIdx]}
          <div className="movingButtons">
            {!isFirstStep ? (
              <MovingButton onClick={goBack} title="Previous"></MovingButton>
            ) : (
              <div></div>
            )}
            {!isLastStep ? (
              <button className="movingButton" type="submit">
                Next
              </button>
            ) : (
              <button className="movingButton" type="submit">
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default MacathonForm;
