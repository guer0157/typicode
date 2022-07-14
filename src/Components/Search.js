import { useState } from "react";

export default function Search({ users, onSearch }) {
  const [searchValue, setSearch] = useState();
  const [filterBy, setFilterBy] = useState("name");
  const handleSearchUsers = () => {
    console.log("Filter by:", filterBy);
    console.log("Search value:", searchValue);
    const filteredList = users.filter((user) => {
      if (filterBy === "name") {
        return user[filterBy].match(searchValue);
      } else {
        return user[filterBy] === searchValue;
      }
    });
    onSearch(filteredList);
  };
  return (
    <div>
      <label htmlFor="userSearch">Search</label>
      <input
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
        type="text"
        name="userSearch"
        id="userSearch"
      />
      <div>
        <input
          onChange={(ev) => {
            setFilterBy(ev.target.value);
          }}
          type="radio"
          id="name"
          name="searchBy"
          value="name"
          checked
        />
        <label htmlFor="name">Name</label>
      </div>
      <div>
        <input
          onChange={(ev) => {
            setFilterBy(ev.target.value);
          }}
          type="radio"
          id="email"
          name="searchBy"
          value="email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <button onClick={handleSearchUsers}>Submit</button>
    </div>
  );
}
