import "./selectInput.css";
const SelectInput = ({
  question,
  name,
  onChange,
  choices,
  value,
}: {
  question: string;
  name: string;
  onChange: () => void;
  choices: string[] | undefined;
  value: string | number;
}) => {
  return (
    <div className="selectBox">
      <h2 className="selectTitle">{question}</h2>
      <select
        required
        name={name}
        onChange={onChange}
        className="SelectMacathonField"
      >
        {choices !== undefined ? (
          choices.map((choice) =>
            choice === value ? (
              <option selected value={choice}>
                {choice}
              </option>
            ) : (
              <option value={choice}>{choice}</option>
            )
          )
        ) : (
          <div></div>
        )}
      </select>
    </div>
  );
};

export default SelectInput;
