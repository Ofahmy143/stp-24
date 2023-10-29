import { create } from "zustand";
import { MacathonFormData } from "../../types/macathon-form-data";

export type MacathonFormStore ={
    Form: MacathonFormData;
    updateForm: (update: Partial<MacathonFormData>) => void;
}

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
  team_number: "3",
};

export const useMacathonFormStore = create<MacathonFormStore>((set) => ({
    Form: initialMacathonData,
    updateForm: (update: Partial<MacathonFormData>) =>
        set((state) => ({ Form: { ...state.Form, ...update } })),
  }));