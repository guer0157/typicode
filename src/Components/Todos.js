import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Completed = (status) => {
  const statusColor = status ? "green" : "red";
  return (
    <span style={{ height: "3rem", width: "3rem", color: statusColor }}>
      {status ? "Yes" : "No"}
    </span>
  );
};
export default function Todos() {
  const [todos, setTodos] = useState();
  const { userId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      console.log("PARMA", userId);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${userId}`
      );
      const userTodo = await response.json();
      setTodos(userTodo);
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <Link to="/">Back Home</Link> */}
      {!!todos && (
        <div>
          <p>Title: {todos.title}</p>
          <p>
            Completed: <Completed status={todos.completed} />
          </p>

          <p></p>
        </div>
      )}
    </div>
  );
}
