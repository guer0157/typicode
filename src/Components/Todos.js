import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Completed = (status) => {
  const [complete, setComplete] = useState(status);
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
export default function Todos() {
  const [todos, setTodos] = useState();
  const { userId } = useParams();
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${userId}`
    );
    const userTodo = await response.json();
    setTodos(userTodo);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Link to="/typicode">Back Home</Link>
      {!!todos && (
        <div>
          <p>Title: {todos.title}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p>Completed:</p> <Completed status={todos.completed} />
          </div>
        </div>
      )}
    </div>
  );
}
