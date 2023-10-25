export type Question = {
  title: string;
  pageQuestions: PageQuestion[];
};

export enum QuestionTypeEnum {
  NORMAL_TEXT = "text",
  EMAIL = "email",
  NUMBER = "number",
  FILE_UPLOAD = "file",
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

export const questions: QuestionsObject = {
  1: {
    title: "",
    pageQuestions: [
      {
        question: "full name",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "name",
        regex: "",
      },
      {
        question: "Email",
        type: QuestionTypeEnum.EMAIL,
        name: "email",
        regex: "",
      },
      {
        question: "Phone Number (Whatsapp No.)",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "mobile",
        regex: "",
      },
      {
        question: "University",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "University",
        regex: "",
      },
      {
        question: "Faculty",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "Faculty",
        regex: "",
      },
      {
        question: "Graduation Year",
        type: QuestionTypeEnum.NUMBER,
        name: "Graduation Year",
        regex: "",
      },
    ],
  },
  2: {
    title: "Team leader",
    pageQuestions: [
      {
        question: "CV (google drive link)",
        type: QuestionTypeEnum.FILE_UPLOAD,
        name: "CV",
        regex: "",
      },
    ],
  },
  3: {
    title: "Team leader",
    pageQuestions: [
      {
        question: "CV (google drive link)",
        type: QuestionTypeEnum.FILE_UPLOAD,
        name: "CV",
        regex: "",
      },
    ],
  },
  6: {
    title: "",
    pageQuestions: [
      {
        question: "How did you know about the competition?",
        type: QuestionTypeEnum.ESSAY,
        name: "essayQuesOne",
        regex: "",
      },
      {
        question: "Why do you want to join the competition?",
        type: QuestionTypeEnum.ESSAY,
        name: "essayQuesTwo",
        regex: "",
      },
    ],
  },
};