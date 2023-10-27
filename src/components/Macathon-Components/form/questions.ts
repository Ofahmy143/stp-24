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
  SecondPageQuestions: {
    pageQuestions: [
      {
        question: "full name",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "fullName",
        regex: "",
      },
      {
        question: "Team Name",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "teamName",
        regex: "",
      },
      {
        question: "Email",
        type: QuestionTypeEnum.EMAIL,
        name: "email",
        regex: "",
      },
      {
        question: "Joined As",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "teamRole",
        choices: ["Leader", "Member"],
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
        name: "gradYear",
        regex: "",
      },
      {
        question: "CV(Drive Link)",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "cv",
        regex: "",
      },
    ],
  },
  ThirdPageQuestions: {
    pageQuestions: [

    ],
  },
};
