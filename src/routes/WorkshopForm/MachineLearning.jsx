export function MachineLearning({ q4, q5, q6, onSetQ4, onSetQ5, onSetQ6 }) {
  return (
    <>
      <div className="form__group">
        <h3>MACHINE LEARNING</h3>
      </div>
      <div className="form__group">
        <input
          value={q4}
          onChange={(e) => onSetQ4(e.target.value)}
          type="text"
          placeholder="Are you familiar with ML or DL algorithms?"
        />
      </div>
      <div className="form__group">
        <input
          value={q5}
          onChange={(e) => onSetQ5(e.target.value)}
          type="text"
          placeholder="Do You know python?"
        />
      </div>
      <div className="form__group">
        <label>
          <h4>
            Are you willing to take a test as Machine Learning has prerequesite
            of Python?
          </h4>
        </label>
        <input
          value={q6}
          onChange={(e) => onSetQ6(e.target.value)}
          type="text"
          placeholder="answer:"
        />
      </div>
    </>
  );
}
