export function LastPage({ q1, q2, q3, onSetQ1, onSetQ2, onSetQ3 }) {
  return (
    <>
      <div className="form__group">
        <label>
          <h4>How did You hear about Workshop?</h4>
        </label>
        <input
          value={q1}
          onChange={(e) => onSetQ1(e.target.value)}
          type="text"
          placeholder="answer:"
        />
      </div>
      <div className="form__group">
        <label>
          <h4>Are You willing to attend workshops in mid-year vacation?</h4>
        </label>
        <input
          value={q2}
          onChange={(e) => onSetQ2(e.target.value)}
          type="text"
          placeholder="answer:"
        />
      </div>
      <div className="form__group">
        <label>
          <h4>Place to conduct the interview: ain shams university or dokki</h4>
        </label>
        <input
          value={q3}
          onChange={(e) => onSetQ3(e.target.value)}
          type="text"
          placeholder="answer:"
        />
      </div>
    </>
  );
}
