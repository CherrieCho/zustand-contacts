import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import useContactStore from "../stores/useContactStore";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  //배열 가지고오기
  const { search, clearSearch } = useContactStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    search(keyword);
  };
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="search"
          variant="standard"
          placeholder="이름 검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      <Button size="small" variant="outlined" onClick={clearSearch}>
        전체 보기
      </Button>
    </div>
  );
};

export default SearchBox;
