import React from "react";
import { Wrap} from "./searchBarStyles";
//import generated from "../../api/generated.json";

const SearchBar = ({ search, getData, setPrint, print}) => {
  


  return (
    <>
      <Wrap>
        <input
          onChange={getData}
          value={search}
          placeholder="Search anything"
          
        ></input>
        <button onClick={()=> setPrint(true)}>
          <span>Search</span>
        </button>
      </Wrap>
    </>
  );
};

export default SearchBar;
