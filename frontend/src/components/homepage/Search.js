import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div>
      <form onKeyDown={searchHandler}>
        <input
          className="me-2 in8"
          type="text"
          placeholder="Search on Nykaa"
          aria-label="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
