import "./form.css";
import "react-toastify/dist/ReactToastify.css";
import MovingButton from "./movingButtons/movingButton";
import { ApplyMultiStepForm } from "./formSteps/multistepForm";
// import SecondFormPage from "./formSteps/SecondFormPage";
// import ThirdFormPage from "./formSteps/ThirdFormPage";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import { questions } from "./questions";
import FormPage from "./formSteps/FormPage";
import { useMacathonFormStore } from "../../../zustand/form/macathon.formStore";

function MacathonForm() {
  const { Form, updateForm } = useMacathonFormStore();

  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showErrorToastMessage = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const { currentStepIdx, steps, goNext, goBack, isFirstStep, isLastStep } =
    ApplyMultiStepForm([
      <FormPage
        formData={Form}
        questions={questions.FirstPageQuestions.pageQuestions}
        updateFields={updateForm}
      />,
      <FormPage
        formData={Form}
        questions={questions.SecondPageQuestions.pageQuestions}
        updateFields={updateForm}
      />,
      <FormPage
        formData={Form}
        questions={questions.ThirdPageQuestions.pageQuestions}
        updateFields={updateForm}
      />,
      <FormPage
        formData={Form}
        questions={questions.FourthPageQuestions.pageQuestions}
        updateFields={updateForm}
      />,
    ]);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    goNext();
    if (isLastStep) {
      // console.warn({ data2: Form });
      setIsLoading(true);
      // const phonePattern = new RegExp("^(0)[0-9]{10}$");
      // if (!phonePattern.test(Form.phone_number)) {
      //   showErrorToastMessage("Invalid phone number");
      //   console.log("Iam Here");
      //   setIsLoading(false);
      //   return;
      // }

      // const emailPattern = new RegExp("^\\S+@\\S+\\.\\S+$");
      // if (!emailPattern.test(Form.email)) {
      //   showErrorToastMessage("Invalid email address");
      //   console.log("Iam Here");
      //   setIsLoading(false);
      //   return;
      // }

      const { team_role, team_number, ...FormWithoutRole } = Form;
      if (parseInt(team_number) > 3 || parseInt(team_number) < 6) {
        // showErrorToastMessage("Invalid team number");
        // console.log("Iam Here");
        // setIsLoading(false);
        // return;
      }
      const API_URL = `https://stp-24.onrender.com/macathon-registeration/add-${team_role
        .toLowerCase()
        .split(" ")
        .join("-")}`;
      try {
        const response = await axios.post(API_URL, FormWithoutRole);
        console.warn({ data: response });
        setIsLoading(false);
        setSuccess(true);
      } catch (error) {
        showErrorToastMessage(`You can't register twice`);
        setIsLoading(false);
        console.error((error as Error).message);
      }
    }
  };

  return (
    <div className="Container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="nav">
        <div className="navText">
          <div className="navLine">#STP-24</div>
          <div className="navLine">#Mind-Travel</div>
        </div>

        <div className="navImage">
          {/* <div className="transparent navLine">#STP-24</div> */}
          {/* <div className="transparent navLine">#Mind-Travel</div> */}
        </div>
      </div>

      <form onSubmit={onSubmitHandler}>
        {success && (
          <div className="success">You have successfully registered</div>
        )}
        {!success && (
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
                <>
                  <PacmanLoader color="#36d7b7" loading={isLoading} size={30} />
                  {!isLoading && (
                    <button className="movingButton" type="submit">
                      Submit
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default MacathonForm;
