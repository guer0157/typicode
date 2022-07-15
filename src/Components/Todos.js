import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Completed = (status) => {
  const [complete, setComplete] = useState(status.status);
  const statusColor = complete ? "green" : "red";
  return (
    <div>
      <span
        style={{
          height: "3rem",
          minWidth: "6rem",
          color: statusColor,
          margin: "0 1rem",
        }}
      >
        {complete ? "Yes" : "No"}
      </span>
      <button
        onClick={() => {
          setComplete(!complete);
        }}
      >
        Toggle Todo
      </button>
    </div>
  );
};
const CompletedCount = ({ todos }) => {
  const completed = todos.filter((todo) => !!todo.completed).length;
  const uncompleted = todos.length - completed;
  return (
    <div>
      <p>There a total of: {todos.length} Todos</p>
      <p>{completed} have been completed</p>
      <p>{uncompleted} are uncompleted</p>
    </div>
  );
};
const TodosList = ({ todos }) => {
  const [todosList, setTodos] = useState(todos);
  const handleDelete = (todoId) => {
    const updatedList = [...todosList].filter((todo) => todo.id !== todoId);
    setTodos(updatedList);
  };
  return (
    <div>
      <CompletedCount todos={todosList} />
      {!!todosList &&
        todosList.map((todo) => (
          <div
            key={todo.id}
            style={{
              border: "1px solid #00000082",
              padding: "1rem",
              marginTop: "1rem",
            }}
          >
            <p>Title: {todo.title}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p>Completed:</p> <Completed status={todo.completed} />
            </div>
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
export default function Todos() {
  const [todos, setTodos] = useState();
  const { userId } = useParams();
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    const userTodo = await response.json();
    setTodos(userTodo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      <Link to="/typicode">Back Home</Link>
      {!!todos && <TodosList todos={todos} />}
    </div>
  );
}
