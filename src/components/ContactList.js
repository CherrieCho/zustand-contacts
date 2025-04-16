import React from "react";
import useContactStore from "../stores/useContactStore";
import { Button } from "@mui/material";

const ContactList = () => {
  //연락처 배열 가지고오기
  const { contacts, searchResults, isSearching, deleteContact } =
    useContactStore();
  //조건에 따라 다른 배열 보여주기
  const listToShow = isSearching ? searchResults : contacts;

  //삭제
  const handleDelete = (id) => {
    if (window.confirm("정말 삭제할까요?")) {
      deleteContact(id);
    }
  };

  return (
    <div>
      {listToShow.map((item) => (
        <div key={item.id} className="profile-area">
          <p>{item.name}</p>
          <p>{item.number}</p>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleDelete(item.id)}
          >
            삭제
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
