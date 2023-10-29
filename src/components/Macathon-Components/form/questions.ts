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
        question: "Team Role?",
        type: QuestionTypeEnum.SELECT,
        name: "team_role",
        choices: ["Team Leader", "Team Member"],
        regex: "",
      },
      {
        question:
          "the number of your team members\n (Exclude yourself)",
        type: QuestionTypeEnum.SELECT,
        name: "team_number",
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
        name: "fullname",
        regex: "",
      },
      {
        question: "Team Name",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "team_name",
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
    ],
  },
  ThirdPageQuestions: {
    pageQuestions :[ 
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
      {
        question: "CV (Drive Link)",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "cv_url",
        regex: "",
      },
    ]
  },
  FourthPageQuestions: {
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
