const Button = ({ label, onClick, type, className = "" }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
