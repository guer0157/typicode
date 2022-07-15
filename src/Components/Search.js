import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search({ users, onFiltered }) {
  const [searchValue, setSearch] = useState();
  const [searchBy, setSearchBy] = useState("name");

  const navigate = useNavigate();
  const handleSearchUsers = () => {
    const filteredList = users.filter((user) => {
      if (searchBy === "name") {
        return user[searchBy].match(searchValue);
      } else {
        return user[searchBy] === searchValue;
      }
    });
    navigate(`/typicode/user/${filteredList[0].id}`);
  };
  const handleFilter = (filterBy) => {
    const filter = {
      com: "com",
      net: "net",
      other: "other",
      all: "all",
    }[filterBy];
    const filteredUsers = [...users].filter((user) => {
      if (filter !== ("other" || "all")) {
        return user.website.split(".").includes(filter);
      } else if (filter === "other") {
        return user.website.split(".")[1].includes("com") ||
          user.website.split(".")[1].includes("net")
          ? false
          : true;
      } else {
        return [...users];
      }
    });
    onFiltered(filteredUsers, filter);
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
        <label>Search by:</label>
        <input
          onChange={(ev) => {
            setSearchBy(ev.target.value);
          }}
          type="radio"
          id="name"
          name="searchBy"
          value="name"
          checked
        />
        <label htmlFor="name">Name</label>
        <input
          onChange={(ev) => {
            setSearchBy(ev.target.value);
          }}
          type="radio"
          id="email"
          name="searchBy"
          value="email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <label>Filter by domain</label>
        <input
          onChange={(ev) => {
            handleFilter(ev.target.value);
          }}
          type="radio"
          id="com"
          name="filterBy"
          value="com"
        />
        .com
        <input
          onChange={(ev) => {
            handleFilter(ev.target.value);
          }}
          type="radio"
          id="net"
          name="filterBy"
          value="net"
        />
        <label htmlFor="email">.net</label>
        <input
          onChange={(ev) => {
            handleFilter(ev.target.value);
          }}
          type="radio"
          id="other"
          name="filterBy"
          value="other"
        />
        <label htmlFor="email">other</label>
        <button onClick={handleFilter}>Clear filters</button>
      </div>
      <button onClick={handleSearchUsers}>Submit</button>
    </div>
  );
}
