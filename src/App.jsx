import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [taskName, setTaskname] = useState("");

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("id", { ascending: false });

    if (error) console.error(error);
    else setTodos(data);
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const deleteSelected = async () => {
    if (selectedIds.length === 0) return;

    const { error } = await supabase
      .from("todos")
      .delete()
      .in("id", selectedIds);

    if (error) {
      console.error(error);
    } else {
      setSelectedIds([]);
      fetchTodos();
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!taskName) return;

    const { error } = await supabase.from("todos").insert([{ task: taskName }]);

    if (error) {
      console.error(error);
    } else {
      setTaskname("");
      fetchTodos();
    }
  };

  return (
    <div>
      <h1>TODO LIST TODAY</h1>
      <form onSubmit={addTodo}>
        <div className="wp">
          <input
            type="text"
            placeholder="What Your Activity..."
            value={taskName}
            onChange={(e) => setTaskname(e.target.value)}
          />
          <button type="submit">+</button>
          <button onClick={deleteSelected} disabled={selectedIds.length === 0}>
            x
          </button>
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
      {todos.length === 0 && <p>No Activity</p>}
    </div>
  );
}

export default App;
