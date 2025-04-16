import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useContactStore from "../stores/useContactStore";

const ContactForm = () => {
  //사용자 입력값
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //zustand store에서 가져오기
  const { addContact, contacts } = useContactStore();

  //연락처 추가 전 유효성검사
  const handleAddContact = () => {
    //중복번호 확인
    const isSameNum = contacts.find((item) => {
      return item.number === number;
    });
    if (!name.trim() || !number.trim()) {
      alert("이름과 전화번호 모두 입력해주세요");
      return;
    }
    if (isSameNum) {
      alert("이미 존재하는 전화번호입니다");
      return;
    }
    addContact(name, number);
  };

  //숫자만 입력가능
  const validation = () => {
    return isNaN(number);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      marginTop="20px"
    >
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
        placeholder="01012345678"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        error={validation()}
        helperText={
          validation() ? "특수기호나 문자는 입력 하실 수 없습니다." : ""
        }
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleAddContact}
        disabled={validation()}
      >
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
