import "./form.css";
import { questions, PageQuestion,QuestionTypeEnum } from "./questions";
import GenericInput from "./InputField/inputField";
import FormTitle from "./formTitle/formTitle";
import MovingButton from "./movingButtons/movingButton";
import EssayInput from "./textArea/textArea";
import { useState } from "react";

function MacathonForm() {
  const [currentPage, setCurrentPage] = useState(1);
  function handleSubmit() {}
  const goNextPage = () => {
    if (currentPage <= 7) setCurrentPage(currentPage + 1);
  };
  const goPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  function getInputField(question: PageQuestion) {
    return question.type !== QuestionTypeEnum.ESSAY ? (
      <GenericInput
        question={question.question}
        name={question.name}
        type={question.type}
      ></GenericInput>
    ) : (
      //This should bw essay input but keep it like this temporarily
      <EssayInput
        question={question.question}
        name={question.name}
      ></EssayInput>
    );
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="mainForm">
        {questions[currentPage].title !== "" ? (
          <FormTitle title={questions[currentPage].title}></FormTitle>
        ) : (<div></div>
        )}
        <div className="formQuestions">
          {questions[currentPage].pageQuestions.map((question: PageQuestion) =>
            getInputField(question)
          )}
        </div>
        <div className="movingButtons">
          <MovingButton
            onClick={goPreviousPage}
            title="Previous"
          ></MovingButton>
          <MovingButton onClick={goNextPage} title="Next"></MovingButton>
        </div>
      </form>
    </div>
  );
}

export default MacathonForm;
