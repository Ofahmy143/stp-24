import { create } from "zustand";
import { WorkshopParticipant } from "../../components/Macathon-Components/form/workshop.questions";

export type WorkshopFormStore ={
    Form: WorkshopParticipant;
    updateForm: (update: Partial<WorkshopParticipant>) => void;
}

const initialWorkshopData: WorkshopParticipant = {
  fullname: "",
  email: "",
  faculty: "",
  graduation_year: "",
//   cv_url: "",
  university: "",
  phone_number: "",
  workshop: "Python",
  workshopSecondPref: "Front-end",
  q1: "",
  q2: "Yes",
  q3: "Ain Shams University",
  q4: "",
  q5: "",
  q6: "",
  q7: ".",
  q8: ".",
};

export const useWorkshopFormStore = create<WorkshopFormStore>((set) => ({
    Form: initialWorkshopData,
    updateForm: (update: Partial<WorkshopParticipant>) =>
        set((state) => ({ Form: { ...state.Form, ...update } })),
  }));