import React, { useState, useEffect, createContext } from "react";

const SearchUserContext = createContext();
const SearchUserProvider = (props) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!search || search.length < 2) {
      setUsers([]);

      return;
    }
    fetch("https://api.github.com/search/users?q=" + search)
      .then((res) => res.json())
      .then(({ items }) => {
        setUsers(items);
      })
      .catch((err) => setErr(err.message));
  }, [search]);

  return (
    <SearchUserContext.Provider value={{ search, setSearch, users, err }}>
      {props.children}
    </SearchUserContext.Provider>
  );
};

export { SearchUserContext, SearchUserProvider };
