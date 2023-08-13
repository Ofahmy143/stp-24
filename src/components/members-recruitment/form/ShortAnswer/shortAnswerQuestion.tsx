import { useEffect } from 'react';
import { useFormStore } from '../../../../zustand/form/formStore';
import { FormState } from '../../../../zustand/form/formstore';
import './shortAnswerQuestion.css'
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
        updateForm({[name]: value});
    }
    useEffect(() => {
        console.log({ Form });
    }, [Form]);
    return (
        <div id="short-answer-question">
            {/* <h3>{question}</h3> */}
            <input
                name={name}
                type="text"
                placeholder={(Form as any)[name]? (Form as any)[name] : question }
                required
                onChange={handleChange}
            />
        </div>
    );
}
