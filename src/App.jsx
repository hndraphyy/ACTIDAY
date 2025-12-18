import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import InputComp from "./components/Input";

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
      <div className="header">
        <h1 className="title">ACTIDAY</h1>
        <p className="date">{today}</p>

        <form>
          <div className="wrapper-filter">
            <InputComp
              type="search"
              name="search"
              id="input"
              placeholder="Search Activity..."
            />
          </div>
        </form>
      </div>
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
