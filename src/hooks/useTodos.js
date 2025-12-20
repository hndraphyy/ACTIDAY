import { useState, useEffect, useMemo } from "react";
import { supabase } from "../supabaseClient";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

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

  const deleteTodos = async (ids) => {
    const { error } = await supabase.from("todos").delete().in("id", ids);
    if (!error) {
      setTodos((prev) => prev.filter((t) => !ids.includes(t.id)));
    }
    return { error };
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.task.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [todos, debouncedSearch]);

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos: filteredTodos,
    searchQuery,
    setSearchQuery,
    loading,
    addTodo,
    deleteTodos,
  };
};
