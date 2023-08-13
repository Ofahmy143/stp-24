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
    // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     setResults({ ...results, [e.target.name]: e.target.value });
    // }
    return (
        <div id="short-answer-question">
            {/* <h3>{question}</h3> */}
            <input
                name={name}
                type="text"
                placeholder={question}
                required
                // onChange={handleChange}
            />
        </div>
    );
}
