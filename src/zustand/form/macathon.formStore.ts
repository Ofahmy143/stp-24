import { create } from "zustand";
import { MacathonFormData } from "../../types/macathon-form-data";

export type MacathonFormStore = {
  Form: MacathonFormData;
  updateForm: (update: Partial<MacathonFormData>) => void;
};

const initialMacathonData: MacathonFormData = {
  fullname: "",
  email: "",
  team_name: "",
  team_role: "Team Member",
  faculty: "",
  graduation_year: "",
  cv_url: "",
  university: "",
  phone_number: "",
  q1: "",
  q2: "",
};

//

export const useMacathonFormStore = create<MacathonFormStore>((set) => ({
  Form: initialMacathonData,
  updateForm: (update: Partial<MacathonFormData>) => {
    let flag = 0
    if (update.team_role === "Individual") {
      if(update["team_name"]) flag = 1;
      update["team_name"] = "None";
    }

    if (update["team_name"] === "None" && update.team_role === "Individual" && flag === 1) {
      console.log({ update });
    } else {
      set((state) => ({ Form: { ...state.Form, ...update } }));
    }

  },
}));
