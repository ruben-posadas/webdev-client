import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  const add = () => {
    addTodo(title);
    setTitle("");
  };

  return (
    <div id="wd-context-todo-list">
      <h3>Todo List</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="wd-context-todo-title"
        className="me-2 rounded border border-neutral-300 px-3 py-1.5"
      />
      <button
        type="button"
        onClick={add}
        id="wd-context-todo-add-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>
      <ul className="m-0 mt-2 list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1 flex items-center gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              className="rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}