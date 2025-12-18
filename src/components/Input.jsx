import { FiSearch } from "react-icons/fi";

const InputComp = ({ type, name, value, placeholder = "" }) => {
  return (
    <div className="wrapper-input">
      <label htmlFor="input">
        <FiSearch className="search-icon" />
      </label>
      <input
        type={type}
        name={name}
        id="input"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputComp;
