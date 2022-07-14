import React, { useMemo, useState } from "react";
import Search from "./Search";
import List from "./List";
function Main() {
  const [userList, setUserList] = useState();
  useMemo(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUserList(data);
  }, []);
  const updateUserList = (filteredList) => {
    console.log("Filtered list: ", filteredList);
    setUserList(filteredList);
  };
  console.log(userList);
  return (
    <div className="App">
      <header className="App-header">
        <Search onSearch={updateUserList} users={userList} />
        {!!userList && <List users={userList} />}
      </header>
    </div>
  );
}

export default Main;
