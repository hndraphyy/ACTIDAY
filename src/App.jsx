import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [taskName, setTaskname] = useState("");

  const today = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <h1 className="title">
        ACTIDAY <span className="sub-title">ACTIVITY TODAY</span>
      </h1>
      <p>{today}</p>
      <form>
        <div className="wp">
          <input
            type="text"
            placeholder="What Your Activity..."
            // value={taskName}
            onChange={(e) => setTaskname(e.target.value)}
          />
          <button type="submit">+</button>
          <button disabled={selectedIds.length === 0}>x</button>
        </div>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span>{item.task}</span>
            <input
              type="checkbox"
              checked={selectedIds.includes(item.id)}
              onChange={() => handleSelect(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
