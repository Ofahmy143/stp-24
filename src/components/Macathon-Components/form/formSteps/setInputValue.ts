import { MacathonFormData } from "../../../../types/macathon-form-data";

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
      return "default";
  }
}

export function setInput(updateFields:(fields:(Partial<MacathonFormData>) => void,name:string)): (e)=>void{
  switch (name) {
    case "fullName":
      return {e=>update};
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
      return "default";
  }
}
