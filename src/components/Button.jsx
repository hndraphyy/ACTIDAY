const Button = ({ label, onClick, type }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
