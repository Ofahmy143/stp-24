import "./form.css";
import MovingButton from "./movingButtons/movingButton";
import { ApplyMultiStepForm } from "./formSteps/multistepForm";
import SecondFormPage from "./formSteps/SecondFormPage";
import ThirdFormPage from "./formSteps/ThirdFormPage";
import { MacathonFormData } from "../../../types/macathon-form-data";
import { useState } from "react";
import FirstFormPage from "./formSteps/FirstFormPage";
const InitialData: MacathonFormData = {
  fullname: "",
  email: "",
  team_name: "",
  team_role: "Team Member",
  faculty: "",
  graduation_year: "",
  cv: "",
  university: "",
  national_id: "",
  phone_number: "",
  q1: "",
  q2: "",
  team_number: "3",
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
      <FirstFormPage data={data} updateFields={updateFields}></FirstFormPage>,
      <SecondFormPage data={data} updateFields={updateFields}></SecondFormPage>,
      <ThirdFormPage data={data} updateFields={updateFields}></ThirdFormPage>,
    ]);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    goNext();
  };

  return (
    <div className="Container">
      <div className="navText">
        <div className="navLine">#STP-24</div>
        <div className="navLine">#Mind-Travel</div>
      </div>

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

      <div className="navImage">
      </div>
    </div>
  );
}

export default MacathonForm;
