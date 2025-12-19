import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("id", { ascending: false });
    if (!error) setTodos(data);
    setLoading(false);
  };

  const addTodo = async (taskName) => {
    const { data, error } = await supabase
      .from("todos")
      .insert([{ task: taskName }])
      .select();
    if (!error) setTodos((prev) => [data[0], ...prev]);
    return error;
  };

  const deleteTodos = async () => {
    const { data, error } = await supabase.from("todos").delete().in("id", ids);
    if (!error) {
      setTodos((prev) => prev.filter((t) => !ids.includes(t.ids)));
    }
    return { error };
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading, addTodo, deleteTodos };
};
