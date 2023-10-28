export function Montage({
  q4,
  q5,
  q6,
  q7,
  onSetQ4,
  onSetQ5,
  onSetQ6,
  onSetQ7,
}) {
  return (
    <>
      <div className="form__group">
        <h3>Montage</h3>
      </div>
      <div className="form__group">
        <input
          value={q4}
          onChange={(e) => onSetQ4(e.target.value)}
          type="text"
          placeholder="Do you have previous knowledge of video 
          editing \ montage"
          title="Do you have previous knowledge of video 
          editing \ montage"
        />
      </div>
      <div className="form__group">
        <input
          value={q5}
          onChange={(e) => onSetQ5(e.target.value)}
          type="text"
          placeholder="What program are you using?"
          title="What program are you using?"
        />
      </div>
      <div className="form__group">
        <input
          value={q6}
          onChange={(e) => onSetQ6(e.target.value)}
          type="text"
          placeholder="Have you ever used Adobe Premiere “Pr” ?"
          title="Have you ever used Adobe Premiere “Pr” ?"
        />
      </div>
      <div className="form__group">
        <input
          value={q7}
          onChange={(e) => onSetQ7(e.target.value)}
          type="text"
          placeholder="Why do you want to learn montage?"
          title="Why do you want to learn montage?"
        />
      </div>
    </>
  );
}
