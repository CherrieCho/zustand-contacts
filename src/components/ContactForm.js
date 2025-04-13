import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useContactStore from "../stores/useContactStore";

const ContactForm = () => {
  //사용자 입력값
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //zustand store에서 가져오기
  const { addContact } = useContactStore();

  //연락처 추가 전 입력값 확인
  const handleAddContact = () => {
    if (!name.trim() || !number.trim()) {
      alert("이름과 전화번호 모두 입력해주세요");
      return;
    }
    addContact(name, number);
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="전화번호"
        variant="outlined"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
