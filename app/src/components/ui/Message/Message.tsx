import React, { useState } from "react";

import styles from "./Message.module.scss";

interface IntMessage {
  msg: string;
  background: string;
}

const Message = ({ msg, background }: IntMessage) => {
  const [display, setDisplay] = useState("flex");
  
  const handleOnClick = () => {
    setDisplay("none");
  };

  return (
    <div className={styles.message} style={{ background, display }}>
      <h1>{msg}</h1>
      <span onClick={handleOnClick} className="material-symbols-outlined">
        close
      </span>
    </div>
  );
};

export default Message;
