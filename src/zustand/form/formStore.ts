import { create } from "zustand";
import { FormState } from "./formstore.d";
import { FormStore } from "./formstore.d";

const initialFormState: FormState = {
    department: "",
    name: "",
    mobile: "",
    email: "",
    areaOfResidency: "",
    university: "",
    faculty: "",
    graduationYear: "",
    firstPreference: "",
    secondPreference: "",
    reasonForApplying: "",
    previousExperience: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    subFirstPreference: "",
    subSecondPreference: "",
};

export const useFormStore = create<FormStore>((set) => ({
  Form: initialFormState,
  updateForm: (update: Partial<FormState>) =>
      set((state) => ({ Form: { ...state.Form, ...update } })),
}));
