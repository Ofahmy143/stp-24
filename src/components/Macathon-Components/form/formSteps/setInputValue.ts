 import { MacathonFormData } from "../../../../types/macathon-form-data";
import { SyntheticEvent } from "react";

export function GetVal(data: MacathonFormData, name: string): string | number {
  console.log(data);
  switch (name) {
    case "fullName":
      return data["fullName"];
    case "email":
      return data["email"];
    case "teamName":
      return data["teamName"];
    case "faculty":
      return data["faculty"];
    case "university":
      return data["university"];
    case "gradYear":
      return data["gradYear"];
    case "cv":
      return data["cv"];
    case "teamRole":
      return data["teamRole"];
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
        console.log(e);
        updateFields({ fullName: e.target.value });
      };
    case "email":
      return (e: SyntheticEvent) => updateFields({ email: e.target.value });
    case "teamName":
      return (e: SyntheticEvent) => updateFields({ teamName: e.target.value });
    case "faculty":
      return (e: SyntheticEvent) => updateFields({ faculty: e.target.value });
    case "university":
      return (e: SyntheticEvent) =>
        updateFields({ university: e.target.value });
    case "gradYear":
      return (e: SyntheticEvent) => updateFields({ gradYear: e.target.value });
    case "cv":
      return (e: SyntheticEvent) => updateFields({ cv: e.target.value });
    case "teamRole":
      return (e: SyntheticEvent) => updateFields({ teamRole: e.target.value });
    default:
      return () => updateFields({});
  }
}
