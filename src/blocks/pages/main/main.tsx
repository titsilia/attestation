import React from "react";
import { useState, useRef } from "react";
import UsersItem from "./usersItem";

import {
  DivMain,
  DivMainControls,
  Input,
  Buttons,
} from "../../styles/userItem-styles";

function Main(): JSX.Element {
  const [valueInput, setValueInput] = useState("");

  let searchInput = useRef<HTMLInputElement>(null);

  function searchUsers() {
    if (searchInput && searchInput.current) {
      setValueInput(searchInput.current.value);
    }
  }

  return (
    <DivMain>
      <DivMainControls>
        <Input type="text" ref={searchInput} />
        <Buttons onClick={searchUsers}>Найти пользователя</Buttons>
      </DivMainControls>
      {valueInput === "" ? <></> : <UsersItem valueInput={valueInput} />}
    </DivMain>
  );
}

export default Main;
