export function FrontEnd({ q4, q5, q6, onSetQ4, onSetQ5, onSetQ6 }) {
  return (
    <>
      <div className="form__group">
        <h3>FRONT-END</h3>
      </div>
      <div className="form__group">
        <label>
          <h4>Are you familiar with any programming language?</h4>
        </label>
        <input
          value={q4}
          onChange={(e) => onSetQ4(e.target.value)}
          type="text"
          placeholder="answer:"
        />
      </div>
      <div className="form__group">
        <label>
          <h4>Do You know any of the following HTML, CSS, JavaScript?</h4>
        </label>
        <input
          value={q5}
          onChange={(e) => onSetQ5(e.target.value)}
          type="text"
          placeholder="answer:"
        />
      </div>
      <div className="form__group">
        <input
          value={q6}
          onChange={(e) => onSetQ6(e.target.value)}
          type="text"
          placeholder="Do You Know what is a div?"
        />
      </div>
    </>
  );
}
