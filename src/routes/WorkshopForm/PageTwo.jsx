export function PageTwo({
  selectedCourse1,
  selectedCourse2,
  onSetCourse1,
  onSetCourse2,
}) {
  return (
    <>
      <div className="form__group">
        <label className="form__label">
          First preference workshop you want to be in
        </label>
        <div className="select">
          <select
            value={selectedCourse1}
            onChange={(e) => onSetCourse1(e.target.value)}
            className="form__select"
          >
            <option value="Python">PYTHON</option>
            <option value="Machine-learning">MACHINE LEARNING</option>
            <option value="Front-end">FRONT-END</option>
            <option value="Graphic-desgin">GRAPHIC DESIGN</option>
            <option value="Montage">MONTAGE</option>
          </select>
        </div>
      </div>
      <div className="form__group">
        <label className="form__label">
          Second preference workshop you want to be in
        </label>
        <div className="select">
          <select
            value={selectedCourse2}
            onChange={(e) => onSetCourse2(e.target.value)}
            className="form__select"
          >
            <option value="Python">PYTHON</option>
            <option value="Machine-learning">MACHINE LEARNING</option>
            <option value="Front-end">FRONT-END</option>
            <option value="Graphic-desgin">GRAPHIC DESIGN</option>
            <option value="Montage">MONTAGE</option>
          </select>
        </div>
      </div>
    </>
  );
}
