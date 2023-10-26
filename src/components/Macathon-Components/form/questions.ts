export type Question = {
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

export type QuestionsObject = { [key: string]: Question };

export const questions: QuestionsObject = {
  "FirstPageQuestions": {
    pageQuestions: [
      {
        question: "full name",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "name",
        regex: "",
      },
      {
        question: "Team Name",
        type: QuestionTypeEnum.EMAIL,
        name: "teamName",
        regex: "",
      },
      {
        question: "Joined As",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "teamRole",
        choices:["Leader","Member"],
        regex: "",
      },
    ],
  },
  "SecondPageQuestion": {
    pageQuestions: [
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
};
