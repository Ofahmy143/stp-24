export function Python({ q4, q5, q6, q7, onSetQ4, onSetQ5, onSetQ6, onSetQ7 }) {
  return (
    <>
      <div className="form__group">
        <h3>python</h3>
      </div>
      <div className="form__group">
        <input
          value={q4}
          onChange={(e) => onSetQ4(e.target.value)}
          type="text"
          placeholder="Are you familiar with any programming language? "
        />
      </div>
      <div className="form__group">
        <input
          value={q5}
          onChange={(e) => onSetQ5(e.target.value)}
          type="text"
          placeholder="Are you familiar with python? "
        />
      </div>
      <div className="form__group">
        <label>
          {" "}
          <h4>What will be the output of the following:</h4>
          <p>
            for i in (1,2,3,4,5):
            <br /> print (i%2)
          </p>
        </label>
        <input
          value={q6}
          onChange={(e) => onSetQ6(e.target.value)}
          type="text"
          placeholder="answer:"
        />
      </div>
      <div className="form__group">
        <input
          value={q7}
          onChange={(e) => onSetQ7(e.target.value)}
          type="text"
          placeholder="Do u know OOP?"
        />
      </div>
    </>
  );
}
