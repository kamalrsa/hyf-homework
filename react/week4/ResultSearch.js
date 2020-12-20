import React, { useContext } from "react";
import { SearchUserContext } from "./SearchUserContext.js";

export const ResultSearch = () => {
  const { users, search, err } = useContext(SearchUserContext);

  if (!search) return <p>No results</p>;

  return (
    <div>
      {err && <p>{err}</p>}
      {!err ? (
        <ul>
          {users && users.length > 0 ? (
            users.map(({ id, login }) => (
              <li className="users" key={id} tabIndex="0">
                {login}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};
