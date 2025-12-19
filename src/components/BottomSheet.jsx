import "../styles/BottomSheet.css";
import InputComp from "./Input";
import Button from "./Button";

const BottomSheet = ({ isOpen, onClose }) => {
  return (
    <div
      className={`bottom-sheet-overlay ${isOpen ? "show" : ""}`}
      onClick={onClose}
    >
      <div
        className={`bottom-sheet-content ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bottom-sheet-handle"></div>
        <h2 className="title">Add New Task</h2>
        <div style={{ marginTop: "20px" }}>
          <InputComp
            placeholder="What's your plan today?"
            className="bottom-sheet-input"
          />
          <Button
            label="Save Activity"
            variant="btn-save"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
