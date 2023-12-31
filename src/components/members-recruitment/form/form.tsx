import { useEffect, useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    PageQuestion,
    questions,
    extraQuestions as committeQuestions,
    CategoryQuestions,
} from "./questions";
import { ShortAnswerQuestion } from "./ShortAnswer/shortAnswerQuestion";
import { EssayQuestion } from "./Essay/essayQuestion";
import { SelectComponent } from "./Select/selectQuestion";
import { useFormStore } from "../../../zustand/form/formStore";
import { RecruitmentMember } from "./membersRecruitment";

//TODO:: sucess and fail screens

function Form() {
    const navigate = useNavigate();
    const { Form } = useFormStore();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [err, setErr] = useState<boolean>(false);
    const [success, setSucess] = useState<boolean>(false);
    const [resErr, setResErr] = useState<boolean>(false);
    const [hideForm, setHideForm] = useState<boolean>(false);
    const [extraQuestions, setExtraQuestions] = useState<boolean>(false);
    const [mappedExtraQuestions, setMappedExtraQuestions] = useState<
        PageQuestion[]
    >([]);
    const [activeSubmit, setActiveSubmit] = useState<boolean>(false);

    function validatePage(pageQuestions: PageQuestion[]) {
        for (const question of pageQuestions) {
            const input = Form[question.name as keyof typeof Form];
            if (!input) {
                return false;
            }
        }
        return true;
    }

    function handlePageForward() {
        // Form.firstPreference = "AC-Python";

        // console.log({test})
        if (currentPage <= Object.keys(questions).length) {
            if (
                extraQuestions &&
                currentPage === Object.keys(questions).length
            ) {
                // console.log("extra questions");
                setActiveSubmit(true);
                setHideForm(true);
            } else {
                if (!validatePage(questions[currentPage].pageQuestions)) {
                    setErr(true);
                } else {
                    setErr(false);
                    setCurrentPage(currentPage + 1);
                }
            }
        }
    }
    function navigateToHomePage() {
        navigate("/");
    }

    function tryAgainResErr(){
        window.location.reload();
    }

    async function submitToDatabase(finalData: RecruitmentMember) {
        try {
            const response = await axios({
                method: "post",
                url: "https://stp-24.onrender.com/member-recruitment/",
                data: finalData,
            });
            setSucess(true);
            console.warn(response);
        } catch (err) {
            console.error((err as Error).message);
            setResErr(true);
        }
    }
    function handlePageBackward() {
        if (extraQuestions) {
            setActiveSubmit(false);
            setHideForm(false);
            setCurrentPage(Object.keys(questions).length + 1);
        }

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    function handleSubmit() {
        if (!extraQuestions) {
            if (!validatePage(questions[currentPage].pageQuestions)) {
                setErr(true);
            } else {
                const FinalForm = {
                    ...Form,
                    firstPreference: Form?.firstPreference.split("-")[0],
                    secondPreference: Form?.secondPreference.split("-")[0],
                    subFirstPreference: Form?.firstPreference.split("-")[1],
                    subSecondPreference: Form?.secondPreference.split("-")[1],
                };
                // console.log({ FinalForm });
                setExtraQuestions(false);
                setHideForm(true);
                submitToDatabase(FinalForm);
            }
        } else {
            if (!validatePage(mappedExtraQuestions)) {
                setErr(true);
            } else {
                const FinalForm = {
                    ...Form,
                    firstPreference: Form?.firstPreference.split("-")[0],
                    secondPreference: Form?.secondPreference.split("-")[0],
                    subFirstPreference: Form?.firstPreference.split("-")[1],
                    subSecondPreference: Form?.secondPreference.split("-")[1],
                };
                // console.log({ FinalForm });
                setExtraQuestions(false);
                setHideForm(true);
                setSucess(true);
                submitToDatabase(FinalForm);
            }
        }
    }

    useEffect(() => {
        const section: CategoryQuestions =
            committeQuestions[
                Form.firstPreference.split(
                    "-"
                )[0] as keyof typeof committeQuestions
            ];

        const committee = section
            ? section[Form.firstPreference.split("-")[1]]
            : undefined;

        if (committee) {
            // console.log({ section: Form.firstPreference.split("-")[0] });
            // console.log(
            //     committeQuestions[
            //         Form.firstPreference.split(
            //             "-"
            //         )[0] as keyof typeof committeQuestions
            //     ]
            // );
            // setHideForm(true);
            // const section: CategoryQuestions =
            //     committeQuestions[
            //         Form.firstPreference.split(
            //             "-"
            //         )[0] as keyof typeof committeQuestions
            //     ];
            // console.log({ section });
            // console.log({ committee });
            setExtraQuestions(true);
            setMappedExtraQuestions(committee);
        } else {
            // if(activeSubmit)setActiveSubmit(false);
            setExtraQuestions(false);
            setMappedExtraQuestions([]);
        }
        console.log("first preference Changed");
    }, [Form.firstPreference]);
    return (
        <div id="form-container">
            {extraQuestions && hideForm && (
                <>
                    <div id="form">
                        {err && <h3>Fill all the fields</h3>}
                        <h1> Committee Questions </h1>
                        {mappedExtraQuestions.map(
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
                    </div>
                </>
            )}
            {!hideForm && (
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
                </>
            )}
            {!success && !resErr && (
                <div id="buttons">
                    <button type="button" onClick={handlePageBackward}>
                        Previous
                    </button>

                    {((currentPage >= Object.keys(questions).length &&
                        !extraQuestions) ||
                        activeSubmit) && (
                        <button type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                    )}
                    {(currentPage !== Object.keys(questions).length ||
                        extraQuestions) &&
                        !activeSubmit && (
                            <button type="button" onClick={handlePageForward}>
                                Next
                            </button>
                        )}
                </div>
            )}
            {success && (
                <>
                    <div id="form">
                        <h2>Thank you for applying!</h2>
                    </div>
                    <div id="home-btn">
                        <button onClick={navigateToHomePage}>
                            Back to HomePage
                        </button>
                    </div>
                </>
            )}
            {resErr && (
                <>
                    <div id="form">
                        <h2>Something went Wrong!</h2>
                        <p>may be duplicate submission</p>
                    </div>
                    <div id="home-btn">
                        <button onClick={tryAgainResErr}>
                            Try again
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Form;
