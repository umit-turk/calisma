import React from "react";
import { Wrap} from "./searchBarStyles";
//import generated from "../../api/generated.json";

const SearchBar = ({ search, onSearchChange }) => {
  
    console.log(search);

  return (
    <>
      <Wrap>
        <input
          onChange={onSearchChange}
          value={search}
          placeholder="Search anything"
          
        ></input>
        <button>
          <span>Search</span>
        </button>
      </Wrap>
    </>
  );
};

export default SearchBar;
