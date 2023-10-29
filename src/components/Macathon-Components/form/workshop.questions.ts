import { QuestionTypeEnum, QuestionsObject } from "./questions";

export type WorkshopParticipant = {
  fullname: string;
  national_id?: string;
  email: string;
  cv_url?: string;
  phone_number: string;
  faculty: string;
  university: string;
  graduation_year: string;
  workshop: string;
  workshopSecondPref: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
};

export enum WorkshopEnum {
  PYTHON = "Python",
  FRONTEND = "Front-end",
  GD = "Graphic Design",
  MONTAGE = "Montage",
  MACHINE_LEARNING = "Machine Learning",
}

export const questions: QuestionsObject = {
  FirstPageQuestions: {
    pageQuestions: [
      {
        question: "full name",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "fullname",
        regex: "",
      },
      {
        question: "Email",
        type: QuestionTypeEnum.EMAIL,
        name: "email",
        regex: "",
      },
      {
        question: "Phone Number",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "phone_number",
        regex: "",
      },
      {
        question: "University",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "university",
        regex: "",
      },
      {
        question: "Faculty",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "faculty",
        regex: "",
      },
      {
        question: "Graduation Year",
        type: QuestionTypeEnum.NUMBER,
        name: "graduation_year",
        regex: "",
      },
    ],
  },
  SecondPageQuestions: {
    pageQuestions: [
      {
        question: "First Preference",
        type: QuestionTypeEnum.SELECT,
        name: "workshop",
        choices: Object.values(WorkshopEnum),
        regex: "",
      },
      {
        question: "Second Preference",
        type: QuestionTypeEnum.SELECT,
        name: "workshopSecondPref",
        choices: Object.values(WorkshopEnum),
        regex: "",
      },
    ],
  },
  ThirdPageQuestions: {
    pageQuestions: [
      {
        question: "How did you hear about us?",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "q1",
        regex: "",
      },
      {
        question: "Willingness to attend in mid-year vacation?",
        type: QuestionTypeEnum.SELECT,
        choices: ["Yes", "No"],
        name: "q2",
        regex: "",
      },
      {
        question: "Prefered Place to conduct interview",
        type: QuestionTypeEnum.SELECT,
        choices: ["Ain Shams University", "Dokki"],
        name: "q3",
        regex: "",
      },
    ],
  },
};

export const workshopQuestions = {
  [WorkshopEnum.PYTHON]: [
    [
      {
        question: "Familiarity with any programming language?",
        type: QuestionTypeEnum.ESSAY,
        name: "q4",
        regex: "",
      },
      {
        question: "For i (1,2,3,4,5) \n \t print(i%2) \n outputs?",
        type: QuestionTypeEnum.ESSAY,
        name: "q5",
        regex: "",
      },
    ],
    [
      {
        question: "Describe your familiarity with OOP",
        type: QuestionTypeEnum.ESSAY,
        name: "q6",
        regex: "",
      },
    ],
  ],
  [WorkshopEnum.FRONTEND]: [
    [
      {
        question: "Familiarity with any programming language?",
        type: QuestionTypeEnum.ESSAY,
        name: "q4",
        regex: "",
      },
      {
        question: "Are You Familiar with HTML, CSS, JS? ",
        type: QuestionTypeEnum.ESSAY,
        name: "q5",
        regex: "",
      },
    ],
    [
      {
        question: "Do you know what a Div is?",
        type: QuestionTypeEnum.ESSAY,
        name: "q6",
        regex: "",
      },
    ],
  ],
  [WorkshopEnum.GD]: [
    [
      {
        question: "Do you have Experience in graphic design?",
        type: QuestionTypeEnum.ESSAY,
        name: "q4",
        regex: "",
      },
      {
        question: "Do you have knowledge in Adobe Photoshop?",
        type: QuestionTypeEnum.ESSAY,
        name: "q5",
        regex: "",
      },
    ],
    [
      {
        question: "Experience in Adobe Illustrator?",
        type: QuestionTypeEnum.ESSAY,
        name: "q6",
        regex: "",
      },
      {
        question: "Are you familiar with Ui design?",
        type: QuestionTypeEnum.ESSAY,
        name: "q7",
        regex: "",
      },
    ],
    [
      {
        question: "Why do you want to graphic design?",
        type: QuestionTypeEnum.ESSAY,
        name: "q8",
        regex: "",
      },
    ],
  ],
  [WorkshopEnum.MONTAGE]: [
    [
      {
        question: "Do you have previous knowledge in montage?",
        type: QuestionTypeEnum.ESSAY,
        name: "q4",
        regex: "",
      },
      {
        question: "What related programs have you used?",
        type: QuestionTypeEnum.ESSAY,
        name: "q5",
        regex: "",
      },
    ],
    [
      {
        question: "Do you have Experience in Adobe Pr?",
        type: QuestionTypeEnum.ESSAY,
        name: "q6",
        regex: "",
      },
      {
        question: "Why do you want to learn montage?",
        type: QuestionTypeEnum.ESSAY,
        name: "q7",
        regex: "",
      },
    ],
  ],
  [WorkshopEnum.MACHINE_LEARNING]: [
    [
      {
        question: "Are you familiar with Ml or DL algorithms?",
        type: QuestionTypeEnum.ESSAY,
        name: "q4",
        regex: "",
      },
      {
        question: "Do you have previous knowledge in Python?",
        type: QuestionTypeEnum.ESSAY,
        name: "q4",
        regex: "",
      },
    ],
    [
      {
        question:
          "Are you willing to take a test as Machine Learning has prerequesite of Python?",
        type: QuestionTypeEnum.SELECT,
        choices: ["Yes", "No"],
        name: "q5",
        regex: "",
      },
    ],
  ],
};
