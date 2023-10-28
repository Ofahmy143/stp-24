import "./form.css";
import MovingButton from "./movingButtons/movingButton";
import { ApplyMultiStepForm } from "./formSteps/multistepForm";
import SecondFormPage from "./formSteps/SecondFormPage";
import ThirdFormPage from "./formSteps/ThirdFormPage";
import { MacathonFormData } from "../../../types/macathon-form-data";
import { useState } from "react";
import FirstFormPage from "./formSteps/FirstFormPage";
import { toast } from "react-toastify";
import axios from "axios";

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
  const [success, setSuccess] = useState<boolean>(false);

  function updateFields(fields: Partial<MacathonFormData>) {
    setData((previousData) => {
      return { ...previousData, ...fields };
    });
  }
  const showErrorToastMessage = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const { currentStepIdx, steps, goNext, goBack, isFirstStep, isLastStep } =
    ApplyMultiStepForm([
      <FirstFormPage data={data} updateFields={updateFields}></FirstFormPage>,
      <SecondFormPage data={data} updateFields={updateFields}></SecondFormPage>,
      <ThirdFormPage data={data} updateFields={updateFields}></ThirdFormPage>,
    ]);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    goNext();
    if (isLastStep) {
      const phonePattern = new RegExp("^(0|1)[0-9]{9}$");
      if (!phonePattern.test(data.phone_number)) {
        showErrorToastMessage("Invalid phone number");
        return;
      }

      const emailPattern = new RegExp("^\\S+@\\S+\\.\\S+$");
      if (!emailPattern.test(data.email)) {
        showErrorToastMessage("Invalid email address");
        return;
      }
    }

    const API_URL = "https://stp-24.onrender.com/macathon-registeration/add-participant";
    try {
      const response = await axios.post(API_URL, data);
      console.warn({ data: response });
      setSuccess(true);
    } catch (error) {
      showErrorToastMessage(`You can't register twice`);
      console.error((error as Error).message);
    }
  };

  return (
    <div className="Container">
      <div className="nav">
        <div className="navText">
          <div className="navLine">#STP-24</div>
          <div className="navLine">#Mind-Travel</div>
        </div>

        <div className="navImage">
          <div className="transparent navLine">#STP-24</div>
          <div className="transparent navLine">#Mind-Travel</div>
        </div>
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
    </div>
  );
}

export default MacathonForm;
