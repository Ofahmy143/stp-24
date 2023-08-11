import { useState } from "react";
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
    regex?: string;
    choices?: string[];
    subChoices?: { [key: string]: string[] };
    placeholder?: string;
  };
  
  type QuestionsObject = { [key: number]: Question };
  

  



export function ShortAnswerQuestion({
    question,
    // regex,
}: {
    question: string;
    // regex: string;
}) {
    return (
        <div id="short-answer-question">
            {/* <h3>{question}</h3> */}
            <input type="text" placeholder={question} required />
        </div>
    );
}

export function EssayQuestion({
    question,
}: {
    question: string;
}) {
    return (
        <div id="essay-question">
            

            <textarea
                name=""
                id=""
                placeholder={question}
                required
            ></textarea>
        </div>
    );
}

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

export const SelectComponent = ({question, options} : {question: string, options: string[]}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div id="select-question">
        <select value={selectedOption} onChange={handleOptionChange} required>
          <option value="">{question}</option>
            {options.map((option: string, index: number) => (
                <option value={option} key={index}>{option} </option>
            ))}
        </select>
      </div>
    );
  };
  

const questions: QuestionsObject = {
    1: {
        title: "Personal Information",
        pageQuestions: [
            {
                question: "Name",
                type: "short-answer",
                regex: "",
            },
            {
                question: "Email",
                type: "short-answer",
                regex: "",
            },
            {
                question: "Mobile Number",
                type: "short-answer",
                regex: "",
            },
            {
                question: "Area of residency",
                type: "short-answer",
                regex: "",
            },
        ],
    },

    2: {
        title: "Position Information",

        pageQuestions: [
            {
                question: "First Preference",
                type: "select",
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
                placeholder: "Write your answer here",
            },
            {
                question: "Previous Experience",
                type: "essay",
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
                regex: "",
            },
            {
                question: "Faculty",
                type: "short-answer",
                regex: "",
            },
            {
                question: "Department",
                type: "short-answer",
                regex: "",
            },
            {
                question: "Graduation Year",
                type: "select",
                choices: ["2024", "2025", "2026", "2027", "2028"],
            },
        ],
    },
};

function Form() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    return (
        <div id="form-container">
            <form id="form" action="">
                <h1>{questions[currentPage].title}</h1>
                {questions[currentPage].pageQuestions.map(
                    (question: PageQuestion, index: number) =>
                        question.type === "short-answer" ? (
                            <ShortAnswerQuestion
                                question={question.question}
                                // regex={question.regex}
                                key={index}
                            />
                        ) : (
                            question.type === "essay" ? (
                                <EssayQuestion
                                    question={question.question}
                                    // placeholder={question.question}
                                    key={index}
                                />
                            ) : (
                                question.type === "select" && ( 
                                    <SelectComponent
                                        question={question.question}
                                        options={question.choices || []}
                                        key={index} />
                                    // question.subChoices && (
                                    //     <SelectComponent
                                    //         question={"Sub Choices"}
                                    //         options={question.subChoices[question.choices]}
                                    //         key={index} />
                                    // )
                                )
                            )
                        )
                )}
            </form>
            <div id="buttons">
                <button
                    type="button"
                    onClick={() => {
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (currentPage < 3) setCurrentPage(currentPage + 1);
                    }}
                >
                    Next 
                </button>
            </div>
        </div>
    );
}

export default Form;
