export type Question = {
    title: string;
    pageQuestions: PageQuestion[];
};
export type PageQuestion = {
    question: string;
    type: "short-answer" | "select" | "essay";
    name: string;
    regex?: string;
    choices?: string[];
    subChoices?: { [key: string]: string[] };
    placeholder?: string;
};

export type QuestionsObject = { [key: number]: Question };

export const questions: QuestionsObject = {
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
