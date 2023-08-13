import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import {
    PageQuestion,
    questions,
    ACQuestions,
    MultimediaQuestions,
    Question,
} from "./questions";
import { ShortAnswerQuestion } from "./ShortAnswer/shortAnswerQuestion";
import { EssayQuestion } from "./Essay/essayQuestion";
import { SelectComponent } from "./Select/selectQuestion";
import { useFormStore } from "../../../zustand/form/formStore";

//TODO:: sucess and fail screens

function Form() {
    const navigate = useNavigate();
    const { Form } = useFormStore();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [err, setErr] = useState<boolean>(false);
    const [success, setSucess] = useState<boolean>(false);

    function validatePage(page: Question) {
        const pageQuestions = page.pageQuestions;
        for (const question of pageQuestions) {

            const input = (Form as any)[question.name];
            if (!input) {
                return false;
            }
        }
        return true;
    }

    function handlePageForward() {
        if (currentPage < Object.keys(questions).length) {
            if (!validatePage(questions[currentPage])) {
                setErr(true);
            } else {
                setErr(false);
                setCurrentPage(currentPage + 1);
            }
        }
    }
    function navigateToHomePage() {
        navigate("/stp-24");
    }

    function handlePageBackward() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    function handleSubmit() {
        if(!validatePage(questions[currentPage])) {
            setErr(true);
        }else{
            console.log({FinalForm: Form});
            setSucess(true);
        }
    }

    return (
        <div id="form-container">
            {!success && (
                <>
                    <form id="form" action="">
                        <h1>{questions[currentPage].title}</h1>
                        {err && <h3>Fill all the fields</h3>}
                        {questions[currentPage].pageQuestions.map(
                            (question: PageQuestion, index: number) =>
                                question.type === "short-answer" ? (
                                    <ShortAnswerQuestion
                                        question={question.question}
                                        // regex={question.regex}
                                        name={question.name}
                                        key={index}
                                    />
                                ) : question.type === "essay" ? (
                                    <EssayQuestion
                                        question={question.question}
                                        name={question.name}
                                        // placeholder={question.question}
                                        key={index}
                                    />
                                ) : (
                                    question.type === "select" && (
                                        <SelectComponent
                                            question={question.question}
                                            name={question.name}
                                            options={question.choices || []}
                                            key={index}
                                        />
                                    )
                                )
                        )}
                    </form>
                    <div id="buttons">
                        <button type="button" onClick={handlePageBackward}>
                            Previous
                        </button>

                        {currentPage === 3 && (
                            <button type="button" onClick={handleSubmit}>
                                Submit
                            </button>
                        )}
                        {currentPage !== 3 && (
                            <button type="button" onClick={handlePageForward}>
                                Next
                            </button>
                        )}
                    </div>
                </>
            )}
            {success && (
                <>
                <div id="form">
                    <h2>Thank you for applying!</h2>
                </div>
                <div id="home-btn">
                    <button onClick={navigateToHomePage}>Back to HomePage</button>
                </div>
                </>
            )}
        </div>
    );
}

export default Form;
