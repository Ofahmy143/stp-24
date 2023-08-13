import './essayQuestion.css'
export function EssayQuestion({ question, name }: { question: string; name: string }) {
    // function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    //     setResults({ ...results, [e.target.name]: e.target.value });
    // }
    return (
        <div id="essay-question">
            <textarea
                name={name}
                id=""
                placeholder={question}
                required
                // onChange={handleChange}
            ></textarea>
        </div>
    );
}