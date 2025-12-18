import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { supabase } from "./supabaseClient";
import InputComp from "./components/Input";
import Button from "./components/Button";

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
            <Button label={<MdDeleteForever size={30} color="white" />} />
          </div>
        </form>
      </div>
      <ul></ul>
    </div>
  );
}

export default App;
