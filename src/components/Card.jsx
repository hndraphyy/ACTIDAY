import InputComp from "./Input";

const Card = ({ id, task, isChecked, onChange }) => {
  return (
    <label htmlFor={`check-${id}`} className="wrapper-card">
      <span>{task}</span>
      <InputComp
        type="checkbox"
        id={`check-${id}`}
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  );
};

export default Card;
