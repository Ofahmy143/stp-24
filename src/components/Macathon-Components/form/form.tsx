import "./form.css";
import MovingButton from "./movingButtons/movingButton";
import { ApplyMultiStepForm } from "./formSteps/multistepForm";
import FormWithMainQues from "./formSteps/formWithMainQues";
import FormWithAllQues from "./formSteps/formWithAllQues";
function MacathonForm() {
  const { currentStepIdx, steps, goNext, goBack,isFirstStep,isLastStep } = ApplyMultiStepForm([
    <FormWithMainQues title=""></FormWithMainQues>,
    <FormWithAllQues title="Team Leader"></FormWithAllQues>,
    <FormWithAllQues title="Member 2"></FormWithAllQues>,
    <FormWithAllQues title="Member 3"></FormWithAllQues>,
    <FormWithAllQues title="Member 4"></FormWithAllQues>,
  ]);

  return (
    <div className="Container">
      <form>
        <div className="mainForm">
          {steps[currentStepIdx]}
          <div className="movingButtons">
            {!isFirstStep ? (<MovingButton onClick={goBack} title="Previous"></MovingButton>) : <div></div>
            }
            {!isLastStep ? (
              <MovingButton onClick={goNext} title="Next"></MovingButton>
            ) : (
              <MovingButton onClick={goNext} title="Submit"></MovingButton>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default MacathonForm;
