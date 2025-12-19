import { FiSearch } from "react-icons/fi";

const InputComp = ({
  id,
  type,
  name,
  value,
  searchIcon,
  checked,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={`wrapper-input ${className}`}>
      {searchIcon && (
        <label htmlFor={id}>
          <FiSearch className="search-icon" />
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputComp;
