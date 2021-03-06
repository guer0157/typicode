import React from "react";
import { addressParser } from "../utils/helpers";
import { Link } from "react-router-dom";

export default function List({ user }) {
  return (
    <div>
      {!!user && (
        <div
          style={{
            border: "1px solid #00000082",
            padding: "1rem",
            marginTop: "1rem",
          }}
          key={user.id}
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{addressParser(user.address)}</p>
          <Link to={`/typicode/user/todos/${user.id}`}>Todos</Link>
        </div>
      )}
    </div>
  );
}
