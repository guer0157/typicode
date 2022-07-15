import React, { useMemo, useState } from "react";
import Search from "./Search";
import List from "./List";
function Main() {
  const [userList, setUserList] = useState();
  const [filteredList, setFilteredList] = useState();
  const [showFullList, setshowFullList] = useState(true);

  useMemo(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUserList(data);
  }, []);
  const updateUserList = (filteredList, filter) => {
    if (filter !== "all") {
      setFilteredList(filteredList);
      setshowFullList(false);
    } else {
      setFilteredList(undefined);
      setshowFullList(false);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <Search onFiltered={updateUserList} users={userList} />
        {showFullList &&
          !!userList &&
          userList.map((user) => <List key={user.id} user={user} />)}
        {!!filteredList &&
          filteredList.map((user) => <List key={user.id} user={user} />)}
      </header>
    </div>
  );
}

export default Main;
