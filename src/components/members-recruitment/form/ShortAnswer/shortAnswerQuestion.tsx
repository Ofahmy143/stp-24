import { useFormStore } from "../../../../zustand/form/formStore";
import "./shortAnswerQuestion.css";
export function ShortAnswerQuestion({
    question,
    name,
}: // regex,
{
    question: string;
    name: string;
    // regex: string;
}) {
    const { Form, updateForm } = useFormStore();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        updateForm({ [name]: value });
    }
    return (
        <div id="short-answer-question">
            {/* <h3>{question}</h3> */}
            <input
                name={name}
                type="text"
                value={
                    Form[name as keyof typeof Form]
                        ? Form[name as keyof typeof Form]
                        : ""
                }
                placeholder={question}
                required
                onChange={handleChange}
            />
        </div>
    );
}
