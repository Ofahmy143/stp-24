import './selectQuestion.css'
import { useState } from "react";

export const SelectComponent = ({
    question,
    options,
    name,
}: {
    question: string;
    options: string[];
    name: string;
}) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedOption(event.target.value);
        // setResults({ ...results, [name]: selectedOption });
    };
    // useEffect(() => {
    //     setResults({...results, [name]: selectedOption});
    // }, [selectedOption]);
    return (
        <div id="select-question">
            <select
                name={name}
                value={selectedOption}
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
