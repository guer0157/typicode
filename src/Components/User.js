import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import List from "./List";

export default function User() {
  const { userId } = useParams();
  const [user, setUser] = useState();
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userData = await response.json();
    setUser(userData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{!!user && <List user={user} />}</div>;
}
