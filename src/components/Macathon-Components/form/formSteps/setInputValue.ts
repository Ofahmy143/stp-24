import { MacathonFormData } from "../../../../types/macathon-form-data";
import { SyntheticEvent } from "react";

export function GetVal(data: MacathonFormData, name: string): string | number {
  switch (name) {
    case "fullName":
      return data["fullname"];
    case "email":
      return data["email"];
    case "teamName":
      return data["team_name"];
    case "faculty":
      return data["faculty"];
    case "university":
      return data["university"];
    case "gradYear":
      return data["graduation_year"];
    case "cv":
      return data["cv"];
    case "teamRole":
      return data["team_role"];
    case "phoneNumber":
      return data["phone_number"];
    case "teamNumber":
      return data["team_number"];
    case "q1":
      return data["q1"];
    case "q2":
      return data["q2"];
    default:
      return "";
  }
}

export function setInput(
  updateFields: (fields: Partial<MacathonFormData>) => void,
  name: string
) {
  switch (name) {
    case "fullName":
      return (e: SyntheticEvent) => {
        updateFields({ fullname: e.target.value });
      };
    case "email":
      return (e: SyntheticEvent) => updateFields({ email: e.target.value });
    case "teamName":
      return (e: SyntheticEvent) => updateFields({ team_name: e.target.value });
    case "faculty":
      return (e: SyntheticEvent) => updateFields({ faculty: e.target.value });
    case "university":
      return (e: SyntheticEvent) =>
        updateFields({ university: e.target.value });
    case "gradYear":
      return (e: SyntheticEvent) =>
        updateFields({ graduation_year: e.target.value });
    case "cv":
      return (e: SyntheticEvent) => updateFields({ cv: e.target.value });
    case "teamRole":
      return (e: SyntheticEvent) => updateFields({ team_role: e.target.value });
    case "phoneNumber":
      return (e: SyntheticEvent) =>
        updateFields({ phone_number: e.target.value });
    case "teamNumber":
      return (e: SyntheticEvent) =>
        updateFields({ team_number: e.target.value });
    case "q1":
      return (e: SyntheticEvent) => updateFields({ q1: e.target.value });
    case "q2":
      return (e: SyntheticEvent) => updateFields({ q2: e.target.value });
    default:
      return () => updateFields({});
  }
}
