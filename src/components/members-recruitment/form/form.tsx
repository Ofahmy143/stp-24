import React, { useEffect, useState } from "react";
import "./form.css";

// type questionType = "short-answer" | "essay" | "mcq" | "scq";
// type subChoices = {
//     [key: string]: string[];
// }
// type PageQuestion = {
//     question: string;
//     type: questionType;
//     regex?: string;
//     choices?: string[];
//     subChoices?: subChoices;
// }
// type Page = {
//     title : string;
//     pageQuestions: PageQuestion[];
// }

// type Question = {
//     [key: string]: Page;
// }

type Question = {
    title: string;
    pageQuestions: PageQuestion[];
};

type PageQuestion = {
    question: string;
    type: "short-answer" | "select" | "essay";
    name: string;
    regex?: string;
    choices?: string[];
    subChoices?: { [key: string]: string[] };
    placeholder?: string;
};

type QuestionsObject = { [key: number]: Question };

// export function MCQ({
//     question,
//     choices,
// }: {
//     question: string;
//     choices: string[];
// }) {
//     return (
//         <div id="mcq">
//             <h3>{question}</h3>
//         </div>
//     );
// }

// export function SCQ({
//     question,
//     choices,
// }: {
//     question: string;
//     choices: string[];
// }) {
//     const [selectedOption, setSelectedOption] = useState<string>("");

//     function handleOptionChange(choice: string) {
//         setSelectedOption(choice);
//     }
//     return (
//         <div id="scq">
//             <h3>{question}</h3>
//             <div id="choices">
//                 {choices.map((choice) => (
//                     <label id="single-choice">
//                         <input
//                             type="radio"
//                             value={choice}
//                             checked={selectedOption === choice}
//                             onChange={() => handleOptionChange(choice)}
//                         />
//                         {choice}
//                     </label>
//                 ))}
//             </div>
//         </div>
//     );
// }

const questions: QuestionsObject = {
    1: {
        title: "Personal Information",
        pageQuestions: [
            {
                question: "Name",
                type: "short-answer",
                name: "name",
                regex: "",
            },
            {
                question: "Email",
                type: "short-answer",
                name: "email",
                regex: "",
            },
            {
                question: "Mobile Number",
                type: "short-answer",
                name: "mobile",
                regex: "",
            },
            {
                question: "Area of residency",
                type: "short-answer",
                regex: "",
                name: "areaOfResidency",
            },
        ],
    },

    2: {
        title: "Position Information",

        pageQuestions: [
            {
                question: "First Preference",
                type: "select",
                name: "firstPreference",
                choices: ["AC", "Multimedia", "IR", "ER", "Events"],
                subChoices: {
                    AC: ["Freelancing", "Engineering", "Juniors"],
                    Multimedia: [
                        "Social Media",
                        "Media",
                        "Graphic Design",
                        "Podcast",
                        "Software",
                    ],
                    IR: ["Logistics", "DCR", "HR and QC"],
                    ER: ["Public Relations", "Business Development"],
                    Events: ["Technical Team"],
                },
            },
            {
                question: "Second Preference",
                type: "select",
                name: "secondPreference",
                choices: ["AC", "Multimedia", "IR", "ER", "Events"],
                subChoices: {
                    AC: ["Freelancing", "Engineering", "Juniors"],
                    Multimedia: [
                        "Social Media",
                        "Media",
                        "Graphic Design",
                        "Podcast",
                        "Software",
                    ],
                    IR: ["Logistics", "DCR", "HR and QC"],
                    ER: ["Public Relations", "Business Development"],
                    Events: ["Technical Team"],
                },
            },
            {
                question: "Reason for applying",
                type: "essay",
                name: "reasonForApplying",
                placeholder: "Write your answer here",
            },
            {
                question: "Previous Experience",
                type: "essay",
                name: "previousExperience",
                placeholder: "Write your answer here",
            },
        ],
    },
    3: {
        title: "Educational Information",
        pageQuestions: [
            {
                question: "University",
                type: "short-answer",
                name: "university",
                regex: "",
            },
            {
                question: "Faculty",
                type: "short-answer",
                name: "faculty",
                regex: "",
            },
            {
                question: "Department",
                type: "short-answer",
                name: "department",
                regex: "",
            },
            {
                question: "Graduation Year",
                name: "graduationYear",
                type: "select",
                choices: ["2024", "2025", "2026", "2027", "2028"],
            },
        ],
    },
};

const SelectComponent = ({
    question,
    options,
    name,
}: {
    question: string;
    options: string[];
    name: string;
}) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedOption(event.target.value);
        // setResults({ ...results, [name]: selectedOption });
    };
    // useEffect(() => {
    //     setResults({...results, [name]: selectedOption});
    // }, [selectedOption]);
    return (
        <div id="select-question">
            <select
                name={name}
                value={selectedOption}
                onChange={handleOptionChange}
                required
            >
                <option value="">{question}</option>
                {options.map((option: string, index: number) => (
                    <option value={option} key={index}>
                        {option}{" "}
                    </option>
                ))}
            </select>
        </div>
    );
};
function ShortAnswerQuestion({
    question,
    name,
}: // regex,
{
    question: string;
    name: string;
    // regex: string;
}) {
    // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     setResults({ ...results, [e.target.name]: e.target.value });
    // }
    return (
        <div id="short-answer-question">
            {/* <h3>{question}</h3> */}
            <input
                name={name}
                type="text"
                placeholder={question}
                required
                // onChange={handleChange}
            />
        </div>
    );
}
function EssayQuestion({ question, name }: { question: string; name: string }) {
    // function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    //     setResults({ ...results, [e.target.name]: e.target.value });
    // }
    return (
        <div id="essay-question">
            <textarea
                name={name}
                id=""
                placeholder={question}
                required
                // onChange={handleChange}
            ></textarea>
        </div>
    );
}
function Form() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [err, setErr] = useState<boolean>(false);
    const [results, setResults] = useState<{
        [key: string]: string | string[] | number | undefined;
    }>({}); //

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        // const pageLength = Object.keys(questions).length;
        for (const key in results) {
            if (!results[key]) {
                return setErr(true);
            }
        }

        try{
            
            const res = await fetch("https://stp-24.onrender.com/member-recruitment/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(results),
            })
            console.log(res);
        }catch(err){
            console.log((err as Error).message);
        }


    }
    function fillData(page: Question) {
        const pq = page.pageQuestions;
        const data: { [key: string]: string | string[] | number | undefined } =
            {};
        for (const q of pq) {
            const input = document.querySelector(`[name="${q.name}"]`) as
                | HTMLInputElement
                | HTMLTextAreaElement
                | HTMLSelectElement;
            if (!input.value) {
                return false;
            }
            console.log("passed name here", q.name);
            console.log("passed value here", input.value);
            console.log("passsed result here", results);
            data[q.name] = input.value;
        }
        const addedData = { ...results, ...data };
        setResults(addedData);
        return true;
    }
    useEffect(() => {
        refillData(questions[currentPage]);
    }, [currentPage]);
    function refillData(page: Question) {
        const pq = page.pageQuestions;
        for (const q of pq) {
            console.log({ q });
            // const test = document.querySelector(`[name="${q.name}"]`);
            (document.querySelector(`[name="${q.name}"]`) as HTMLInputElement).value =(results[q.name] as string)? (results[q.name] as string):""
            // console.log((test as HTMLInputElement));
            // .value = results[q.name] as string;
        }
    }
    useEffect(() => {
        console.log({ results });
    }, [results]);

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
                                // question.subChoices && (
                                //     <SelectComponent
                                //         question={"Sub Choices"}
                                //         options={question.subChoices[question.choices]}
                                //         key={index} />
                                // )
                            )
                        )
                )}
            </form>
            <div id="buttons">
                <button
                    type="button"
                    onClick={() => {
                        if (currentPage > 1) {
                            // refill
                            // refillData(questions[currentPage - 1]);
                            setCurrentPage(currentPage - 1);
                        }
                    }}
                >
                    Previous
                </button>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
                <button
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
                </button>
            </div>
        </div>
    );
}

export default Form;
