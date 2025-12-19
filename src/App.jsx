import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { supabase } from "./supabaseClient";
import InputComp from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import BottomSheet from "./components/BottomSheet";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const today = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container">
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
      <div className="content">
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
      <Button
        label={<FaRegSquarePlus size={40} color="white" />}
        className="btn-add"
        onClick={() => setIsSheetOpen(true)}
      />
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      ></BottomSheet>
    </div>
  );
}

export default App;
