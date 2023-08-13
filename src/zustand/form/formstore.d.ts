export type FormStore = {
    Form: FormState;
    updateForm: (update: Partial<FormState>) => void;
};
export type FormState = {
    name: string;
    mobile: string;
    email: string;
    areaOfResidency: string;
    department: string;
    university: string;
    faculty: string;
    graduationYear: string;
    firstPreference: string;
    secondPreference: string;
    reasonForApplying: string;
    previousExperience: string;
    subFirstPreference: string;
    subSecondPreference: string;
    q1: string;
    q2: string;
    q3: string;
    q4?: string;
    q5?: string;
    q6?: string;
};
