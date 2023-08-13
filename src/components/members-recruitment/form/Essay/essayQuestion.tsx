import { useFormStore } from '../../../../zustand/form/formStore';
import './essayQuestion.css'
export function EssayQuestion({ question, name }: { question: string; name: string }) {
    const { Form, updateForm } = useFormStore();
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        updateForm({[name]: e.target.value});
    }
    return (
        <div id="essay-question">
            <textarea
                name={name}
                id=""
                placeholder={question}
                value={Form[name as keyof typeof Form]? Form[name as keyof typeof Form] : ""}
                required
                onChange={handleChange}
            ></textarea>
        </div>
    );
}