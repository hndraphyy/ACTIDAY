import { useState } from "react";
import "../styles/bottomSheet.css";
import InputComp from "./Input";
import Button from "./Button";

const BottomSheet = ({ isOpen, onClose, onSave }) => {
  const [taskName, setTaskname] = useState("");
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (taskName.trim() === "") {
      setError("Task name cannot be empty!");
      return;
    }

    await onSave(taskName);
    setError("");
    setTaskname("");
    onClose();
  };

  const handleChange = (e) => {
    setTaskname(e.target.value);
    if (error) setError("");
  };
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
        <div style={{ marginTop: "30px" }}>
          <InputComp
            placeholder="What's your plan today?"
            className="bottom-sheet-input"
            value={taskName}
            onChange={handleChange}
          />
          {error && <p className="error-message">{error}</p>}
          <div className="footer-bottom-sheet">
            <Button
              label="Cancel"
              className="btn-bottom-sheet btn-cancel"
              style={{ width: "100%", marginTop: "10px" }}
              onClick={onClose}
            />
            <Button
              label="Save"
              className="btn-bottom-sheet btn-save"
              style={{ width: "100%", marginTop: "10px" }}
              onClick={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
