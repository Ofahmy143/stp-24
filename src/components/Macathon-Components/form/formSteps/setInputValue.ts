import { MacathonFormData } from "../../../../types/macathon-form-data";
// import { ChangeEvent } from "react";
import { WorkshopParticipant } from "../workshop.questions";

export type DataType = MacathonFormData & WorkshopParticipant;
// export function GetVal(data: Partial<DataType>, name: string): string | undefined {
//   switch (name) {
//     case "fullName":
//       return data["fullname"];
//     case "email":
//       return data["email"];
//     case "teamName":
//       return data["team_name"];
//     case "faculty":
//       return data["faculty"];
//     case "university":
//       return data["university"];
//     case "gradYear":
//       return data["graduation_year"];
//     case "cv":
//       return data["cv"];
//     case "teamRole":
//       return data["team_role"];
//     case "phoneNumber":
//       return data["phone_number"];
//     case "teamNumber":
//       return data["team_number"];
//     case "workshop":
//       return data["workshop"];
//     case "workshopSecondPref":
//       return data["workshopSecondPref"];
//     case "q1":
//       return data["q1"];
//     case "q2":
//       return data["q2"];
//     case "q3":
//       return data["q3"];
//     case "q4":
//       return data["q4"];
//     case "q5":
//       return data["q5"];
//     case "q6":
//       return data["q6"];
//     case "q7":
//       return data["q7"];
//     case "q8":
//       return data["q8"];
//     default:
//       return "";
//   }
// }

// export function setInput(
//   updateFields: (fields: Partial<DataType>) => void,
//   name: string
// ) {
//   switch (name) {
//     case "fullName":
//       return (e: ChangeEvent<HTMLInputElement>) => {
//         updateFields({ fullname: e.target.value });
//       };
//     case "email":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ email: e.target.value });
//     case "teamName":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ team_name: e.target.value });
//     case "faculty":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ faculty: e.target.value });
//     case "university":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ university: e.target.value });
//     case "gradYear":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ graduation_year: e.target.value });
//     case "cv":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ cv: e.target.value });
//     case "teamRole":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ team_role: e.target.value });
//     case "phoneNumber":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ phone_number: e.target.value });
//     case "teamNumber":
//       return (e: ChangeEvent<HTMLInputElement>) =>
//         updateFields({ team_number: e.target.value });
//     case "workshop":
//       return (e: ChangeEvent<HTMLSelectElement>) =>
//         updateFields({ workshop: e.target.value });
//     case "workshopSecondPref":
//       return (e: ChangeEvent<HTMLSelectElement>) =>
//         updateFields({ workshopSecondPref: e.target.value });
//     case "q1":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q1: e.target.value });
//     case "q2":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q2: e.target.value });
//     case "q3":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q3: e.target.value });
//     case "q4":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q4: e.target.value });
//     case "q5":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q5: e.target.value });
//     case "q6":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q6: e.target.value });
//     case "q7":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q7: e.target.value });
//     case "q8":
//       return (
//         e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//       ) => updateFields({ q8: e.target.value });

//     default:
//       return () => updateFields({});
//   }
// }
