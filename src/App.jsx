import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { supabase } from "./supabaseClient";
import InputComp from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";

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
              searchIcon
            />
            <Button label={<MdDeleteForever size={30} color="white" />} />
          </div>
        </form>
      </div>
      <div className="container">
        {todos.length > 0 ? (
          todos.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              task={item.task}
              isChecked={selectedIds.includes(item.id)}
              onChange={() => handleSelect(item.id)}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>No activities yet. Start adding some!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
