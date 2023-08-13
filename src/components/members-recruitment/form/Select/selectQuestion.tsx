import { useFormStore } from "../../../../zustand/form/formStore";
import "./selectQuestion.css";
// import { useEffect, useState } from "react";

export const SelectComponent = ({
    question,
    options,
    name,
}: {
    question: string;
    options: string[];
    name: string;
}) => {
    // const [selectedOption, setSelectedOption] = useState<string>("");
    const { Form, updateForm } = useFormStore();
    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        // console.log("Iam here")
        // console.log({this: event.target.value});
        updateForm({ [name]: event.target.value });
        // setSelectedOption(event.target.value);
        // console.log({[name]: event.target.value})
    };



    return (
        <div id="select-question">
            <select
                name={name}
                value={Form[name as keyof typeof Form] }
                onChange={handleOptionChange}
                required
            >
                <option value="">{question}</option>
                {options.map((option: string, index: number) => (
                    <option value={option} key={index}>
                        {option}{" "}
                    </option>
                ))}
            </select>
        </div>
    );
};
