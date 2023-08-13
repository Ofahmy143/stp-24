import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { PageQuestion, questions, ACQuestions, MultimediaQuestions } from "./questions";
import { ShortAnswerQuestion } from "./ShortAnswer/shortAnswerQuestion";
import { EssayQuestion } from "./Essay/essayQuestion";
import { SelectComponent } from "./Select/selectQuestion";


//TODO:: sucess and fail screens


function Form() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [err, setErr] = useState<boolean>(false);

    // const [results, setResults] = useState<{
    //     [key: string]: string | string[] | number | undefined;
    // }>({}); //

    // async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    //     e.preventDefault();
    //     // const pageLength = Object.keys(questions).length;
    //     for (const key in results) {
    //         if (!results[key]) {
    //             return setErr(true);
    //         }
    //     }

    //     try{
    //         // TODO: check is OK and appear success screen
    //         await fetch("https://stp-24.onrender.com/member-recruitment/",{
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(results),
    //         })
    //         navigate("/stp-24");
    //     }catch(err){
    //         console.log((err as Error).message);
    //     }


    // }
    // function fillData(page: Question) {
    //     const pq = page.pageQuestions;
    //     const data: { [key: string]: string | string[] | number | undefined } =
    //         {};
    //     for (const q of pq) {
    //         const input = document.querySelector(`[name="${q.name}"]`) as
    //             | HTMLInputElement
    //             | HTMLTextAreaElement
    //             | HTMLSelectElement;
    //         if (!input.value) {
    //             return false;
    //         }
    //         console.log("passed name here", q.name);
    //         console.log("passed value here", input.value);
    //         console.log("passsed result here", results);
    //         data[q.name] = input.value;
    //     }
    //     const addedData = { ...results, ...data };
    //     setResults(addedData);
    //     return true;
    // }
    // useEffect(() => {
    //     refillData(questions[currentPage]);
    // }, [currentPage]);
    // function refillData(page: Question) {
    //     const pq = page.pageQuestions;
    //     for (const q of pq) {
    //         console.log({ q });
    //         // const test = document.querySelector(`[name="${q.name}"]`);
    //         (document.querySelector(`[name="${q.name}"]`) as HTMLInputElement).value =(results[q.name] as string)? (results[q.name] as string):""
    //         // console.log((test as HTMLInputElement));
    //         // .value = results[q.name] as string;
    //     }
    // }
    // useEffect(() => {
    //     console.log({ results });
    // }, [results]);

    return (
        <div id="form-container">
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
                <button
                    type="button"
                    // onClick={() => {
                    //     if (currentPage > 1) {
                    //         // refill
                    //         // refillData(questions[currentPage - 1]);
                    //         setCurrentPage(currentPage - 1);
                    //     }
                    // }}
                >
                    Previous
                </button>
                
                {currentPage === 3 && <button type="button" ></button>}
                {currentPage !== 3 && <button type="button">Next</button>}
                {/* <button
                    type="button"
                    onClick={() => {
                        if (currentPage < 3) {
                            if(currentPage === 3 ){
                                fillData(questions[3]);
                            }
                            if (fillData(questions[currentPage])) {
                                setCurrentPage(currentPage + 1);
                            } else {
                                setErr(true);
                            }
                        }
                    }}
                >
                    Next
                </button> */}
            </div>
        </div>
    );
}

export default Form;
