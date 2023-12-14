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
  optional?: boolean;
};

export type QuestionsObject = { [key: string]: Question };

export const questions: QuestionsObject = {
  FirstPageQuestions: {
    pageQuestions: [
      {
        question: "Team Role?",
        type: QuestionTypeEnum.SELECT,
        name: "team_role",
        choices: ["Team Leader", "Team Member", "Individual"],
        regex: "",
      },
      // {
      //   question:
      //     "the number of your team members\n (Exclude yourself)",
      //   type: QuestionTypeEnum.SELECT,
      //   name: "team_number",
      //   choices: ["1", "2", "3"],
      //   regex: "",
      // },
      {
        question: "Team Name",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "team_name",
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
        regex: "^202[4-9]$",
      },
      {
        question: "CV (Drive Link)",
        type: QuestionTypeEnum.NORMAL_TEXT,
        name: "cv_url",
        optional: true,
        regex: "",
      },
    ]
  },
  FourthPageQuestions: {
    pageQuestions: [
      {
        question: "Which competition do you want to join?",
        type: QuestionTypeEnum.SELECT,
        name: "competition-choice",
        choices: ["Autonomous Car Race", "Shoplifting Detection"],
        regex: "",
      },
      {
        question: "How did you know about the competition, and Why do you want to join the competition?",
        type: QuestionTypeEnum.ESSAY,
        name: "q2",
        regex: "",
      },
    ],
  },
};
