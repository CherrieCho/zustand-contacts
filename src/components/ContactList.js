import React from "react";
import useContactStore from "../stores/useContactStore";

const ContactList = () => {
  //연락처 배열 가지고오기
  const { contacts, searchResults, isSearching } = useContactStore();
  //조건에 따라 다른 배열 보여주기
  const listToShow = isSearching ? searchResults : contacts;

  return (
    <div>
      {listToShow.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
