import React from "react";
import { useState, useRef } from "react";
import UsersItem from "./usersItem";

import "../../App.css";

function Main(): JSX.Element {
  const [valueInput, setValueInput] = useState("");

  let searchInput = useRef<HTMLInputElement>(null);

  function searchUsers() {
    if (searchInput && searchInput.current) {
      setValueInput(searchInput.current.value);
    }
  }

  return (
    <div className="main">
      <div className="main__controls">
        <input type="text" ref={searchInput} />
        <button onClick={searchUsers}>Найти пользователя</button>
      </div>
      {valueInput === "" ? <></> : <UsersItem valueInput={valueInput} />}
    </div>
  );
}

export default Main;
