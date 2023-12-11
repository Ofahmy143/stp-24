import "./form.css";
import "react-toastify/dist/ReactToastify.css";
import MovingButton from "./movingButtons/movingButton";
import { ApplyMultiStepForm } from "./formSteps/multistepForm";
// import SecondFormPage from "./formSteps/SecondFormPage";
// import ThirdFormPage from "./formSteps/ThirdFormPage";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { HashLoader } from "react-spinners";
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
      console.warn({ data2: Form });
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      let { team_role, team_number, ...FormWithoutRole } = Form;

      if(team_role === "Individual") {
        FormWithoutRole.team_name = "None"
        team_role = "Team Member"
      }
      FormWithoutRole.team_name = Form.team_name.trim();
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
        if((error as AxiosError).code === 'ERR_BAD_REQUEST') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
          showErrorToastMessage(`Error: ${(error as AxiosError).response?.data.message}`);
        }else{
          showErrorToastMessage(`Error: something went wrong please refresh try again`);
        }

        setIsLoading(false);
        console.error((error as Error));
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
                <>
                {!isLoading && (
                  <MovingButton onClick={goBack} title="Previous"></MovingButton>
                )}
                </>
              ) : (
                <div></div>
              )}
              {!isLastStep ? (
                <button className="movingButton" type="submit">
                  Next
                </button>
              ) : (
                <>
                <div className="loader-container">
                  <HashLoader color="#751231" loading={isLoading} size={25} />
                </div>
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
