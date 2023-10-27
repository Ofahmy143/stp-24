export function GraphicDesign({
  q4,
  q5,
  q6,
  q7,
  q8,
  onSetQ4,
  onSetQ5,
  onSetQ6,
  onSetQ7,
  onSetQ8,
}) {
  return (
    <>
      <div className="form__group">
        <h3>GRAPHIC DESIGN</h3>
      </div>

      <div className="form__group">
        <input
          value={q4}
          onChange={(e) => onSetQ4(e.target.value)}
          type="text"
          placeholder="Do you have previous knowledge of graphic design?"
        />
      </div>
      <div className="form__group">
        <input
          value={q5}
          onChange={(e) => onSetQ5(e.target.value)}
          type="text"
          placeholder="Do you have previous knowledge of “PS” ?"
        />
      </div>
      <div className="form__group">
        <input
          value={q6}
          onChange={(e) => onSetQ6(e.target.value)}
          type="text"
          placeholder="Do you have previous knowledge of  “Ai” ?"
        />
      </div>
      <div className="form__group">
        <input
          value={q7}
          onChange={(e) => onSetQ7(e.target.value)}
          type="text"
          placeholder="You know something about Ui design ?"
        />
      </div>
      <div className="form__group">
        <input
          value={q8}
          onChange={(e) => onSetQ8(e.target.value)}
          type="text"
          placeholder="Why do you want to learn graphics?"
        />
      </div>
    </>
  );
}
