import React from "react";
import "./App.css";
import { Search } from "./SearchSection";
import { ResultSearch } from "./ResultSearch.js";
import { SearchUserProvider } from "./SearchUserContext";

const App = () => {
  return (
    <SearchUserProvider>
      <Search />
      <ResultSearch />
    </SearchUserProvider>
  );
};

export default App;
