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
  title?: string;
};

export type QuestionsObject = { [key: string]: Question };

export const questions: QuestionsObject = {
  FirstPageQuestions: {
    pageQuestions: [
      {
        question: "Are you a team leader or registering as an individual?",
        type: QuestionTypeEnum.SELECT,
        name: "teamRole",
        choices: ["Team Leader", "Team Member"],
        regex: "",
      },
      {
        question:
          "If you are a team leader, what is the number of your team members\n (Exclude yourself)",
        type: QuestionTypeEnum.SELECT,
        name: "teamNumber",
        choices: ["1", "2", "3"],
        regex: "",
      },
    ],
  },
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
        question: "Phone Number",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "phoneNumber",
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
        question: "CV (Drive Link)",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "cv",
        regex: "",
      },
    ],
  },
  ThirdPageQuestions: {
    pageQuestions: [
      {
        question: "How Did you know about the competition?",
        type: QuestionTypeEnum.ESSAY,
        name: "q1",
        regex: "",
      },
      {
        question: "Why do you want to join the competition?",
        type: QuestionTypeEnum.ESSAY,
        name: "q2",
        regex: "",
      },
    ],
  },
};
