export type Question = {
    title: string;
    pageQuestions: PageQuestion[];
};

enum QuestionTypeEnum {
    SHORT_ANSWER = "short-answer",
    SELECT = "select",
    ESSAY = "essay",
}

export type PageQuestion = {
    question: string;
    type: QuestionTypeEnum;
    name: string;
    regex?: string;
    choices?: string[];
    subChoices?: { [key: string]: string[] };
    placeholder?: string;
};

export type QuestionsObject = { [key: number]: Question };

const committeeChoices = [
    "AC-Python",
    "AC-Machine Learning",
    "AC-Front End",
    "AC-Juniors",
    "AC-Graphic Design",
    "AC-Montage",
    "Multimedia-Graphic Design",
    "Multimedia-Media",
    "Multimedia-Podcast",
    "Multimedia-Social Media",
    "Multimedia-Mobile Development",
    "Multimedia-Web Development",
    "IR-Logistics",
    "IR-Decoration, Coordination And Reception",
    "IR-HR and QC",
    "ER-Public Relations",
    "ER-Business Development",
    "Events-Technical Team",
];

export const questions: QuestionsObject = {
    1: {
        title: "Personal Information",
        pageQuestions: [
            {
                question: "Name",
                type: QuestionTypeEnum.SHORT_ANSWER,
                name: "name",
                regex: "",
            },
            {
                question: "Email",
                type: QuestionTypeEnum.SHORT_ANSWER,
                name: "email",
                regex: "",
            },
            {
                question: "Mobile Number",
                type: QuestionTypeEnum.SHORT_ANSWER,
                name: "mobile",
                regex: "",
            },
            {
                question: "Area of residency",
                type: QuestionTypeEnum.SHORT_ANSWER,
                regex: "",
                name: "areaOfResidency",
            },
        ],
    },
    2: {
        title: "Educational Information",
        pageQuestions: [
            {
                question: "University",
                type: QuestionTypeEnum.SHORT_ANSWER,
                name: "university",
                regex: "",
            },
            {
                question: "Faculty",
                type: QuestionTypeEnum.SHORT_ANSWER,
                name: "faculty",
                regex: "",
            },
            {
                question: "Department",
                type: QuestionTypeEnum.SHORT_ANSWER,
                name: "department",
                regex: "",
            },
            {
                question: "Graduation Year",
                name: "graduationYear",
                type: QuestionTypeEnum.SHORT_ANSWER,
                choices: ["2024", "2025", "2026", "2027", "2028"],
            },
        ],
    },

    3: {
        title: "Position Information",

        pageQuestions: [
            {
                question: "First Preference",
                type: QuestionTypeEnum.SELECT,
                name: "firstPreference",
                choices: committeeChoices,
            },
            {
                question: "Second Preference",
                type: QuestionTypeEnum.SELECT,
                name: "secondPreference",
                choices: committeeChoices,
            },
            {
                question: "Reason for applying",
                type: QuestionTypeEnum.ESSAY,
                name: "reasonForApplying",
                placeholder: "Write your answer here",
            },
            {
                question: "Previous Experience",
                type: QuestionTypeEnum.ESSAY,
                name: "previousExperience",
                placeholder: "Write your answer here",
            },
        ],
    },
};

export type CategoryQuestions = {
    [category: string]: PageQuestion[];
};

export const ACQuestions = {
    Python: [
        {
            question: "Have you been to a student activity before? (Yes/No)",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q1",
        },
        {
            question:
                "Do you have experience in the workshop you will be teaching? (Yes/No)",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q2",
        },
        {
            question:
                "Familiar in Python? if yes describe how familiar you are",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q3",
        },
        {
            question:
                "How do you rate yourself in Python? (Beginner-Intermediate-Advanced)",
            type: QuestionTypeEnum.SELECT,
            choices: ["Beginner", "Intermediate", "Advanced"],
            name: "q4",
        },
    ],
    "Machine Learning": [
        {
            question: "Have you been to a student activity before?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q1",
        },
        {
            question:
                "Do you have experience in the workshop you will be teaching?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q2",
        },
        {
            question:
                "Familiar with Machine Algorithms? if yes describe how familiar you are (short Ans)",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q3",
        },
        {
            question: "How do you rate yourself in Machine Learning?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Beginner", "Intermediate", "Advanced"],
            name: "q4",
        },
        {
            question: "Do you know deep learning?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q5",
        },
    ],
    "Front End": [
        {
            question: "Have you been to a student activity before?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q1",
        },
        {
            question:
                "Do you have experience in the workshop you will be teaching?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q2",
        },
        {
            question:
                "Are you Familiar with Html/CSS? if yes describe how familiar you are (short Ans)",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q3",
        },
        {
            question:
                "If you have done a front End design before can you upload it and submit the link?",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q4",
        },
        {
            question: "Do You know JavaScript?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q5",
        },
    ],
    Juniors: [
        {
            question: "Have you been to a student activity before?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q1",
        },
        {
            question:
                "Do you have experience in the workshop you will be teaching?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q2",
        },
        {
            question:
                "What topic do you think is suitable for school students? State why (short Ans)",
            type: QuestionTypeEnum.ESSAY,
            name: "q3",
        },
        {
            question:
                "What do you expect to add to secondary students? (short Ans)",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q4",
        },
        {
            question: "Describe your communication skill (short Ans)",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q5",
        },
    ],
    "Graphic Design": [
        {
            question: "Have you been to a student activity before?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q1",
        },
        {
            question:
                "Do you have experience in the workshop you will be teaching?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q2",
        },
        {
            question:
                "Upload Some of your Designs on google drive and submit the link to the folder",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q3",
        },
        {
            question: "Can you name some selection tools in Photoshop",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q4",
        },
        {
            question: "Have You ever done UI/UX before?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q5",
        },
        {
            question: "Familiar Graphic Design Application That you have used?",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q6",
        },
    ],
    Montage: [
        {
            question: "Have you been to a student activity before?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q1",
        },
        {
            question:
                "Do you have experience in the workshop you will be teaching?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q2",
        },
        {
            question: "Familiar Montage Application That you have used?",
            type: QuestionTypeEnum.ESSAY,
            name: "q3",
        },
        {
            question:
                "Do you know Photography (How to take videos & pictures)?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q4",
        },
        {
            question:
                "If Yes, submit link of some of your taken videos or pictures else N/A",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q5",
        },
        {
            question: "Have you ever used premiere?",
            type: QuestionTypeEnum.SELECT,
            choices: ["Yes", "No"],
            name: "q6",
        },
    ],
};

export const MultimediaQuestions = {
    "Graphic Design": [
        {
            question:
                "Mention software that you've tried before (ex:  photoshop, Illustrator....etc.)",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q1",
        },
        {
            question: "mention any experience related to Graphic design field",
            type: QuestionTypeEnum.ESSAY,
            name: "q2",
        },
        {
            question:
                "what is the successful/effective design from your point of view?",
            type: QuestionTypeEnum.ESSAY,
            name: "q3",
        },
        {
            question:
                "your previous work/portfolio (IF YOU HAVE), Upload drive link and Make sure it is public",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q4",
        },
    ],
    Media: [
        {
            question:
                "Mention any experience realted to media field (photopgraphy, videography Montage, etc...",
            type: QuestionTypeEnum.ESSAY,
            name: "q1",
        },
        {
            question: "What Adobe Softwares have you tried before?",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q2",
        },
        {
            question:
                "your previous work/portfolio (IF YOU HAVE), Upload drive link and Make sure it is public",
            type: QuestionTypeEnum.SHORT_ANSWER,
            name: "q4",
        },
    ],
    "Mobile Development": [
        {
            question:
                "Do you have any programming experience? If yes, please mention it",
            type: QuestionTypeEnum.ESSAY,
            name: "q1",
        },
        {
            question:
                "Do You have experience in Javascript? If yes please mention it",
            type: QuestionTypeEnum.ESSAY,
            name: "q2",
        },
        {
            question:
                "Do You have experience in React Native? If yes please mention it",
            type: QuestionTypeEnum.ESSAY,
            name: "q3",
        },
    ],
    "Web Development": [
        {
            question:
                "Do you have any experience in git? If yes, please submit your git profile link",
            type: QuestionTypeEnum.ESSAY,
            name: "q1",
        },
        {
            question:
                "Do You have experience in Javascript? If yes please mention it",
            type: QuestionTypeEnum.ESSAY,
            name: "q2",
        },
        {
            question:
                "Do You have experience in React? If yes please mention it",
            type: QuestionTypeEnum.ESSAY,
            name: "q3",
        },
        {
            question:
                "Do You have experience in Node.js? If yes please mention it",
            type: QuestionTypeEnum.ESSAY,
            name: "q4",
        },
    ],
};
export const extraQuestions = {
    AC: ACQuestions,
    Multimedia: MultimediaQuestions,
};
