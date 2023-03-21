import React from "react";

import styles from "./Option.module.scss";

const Option = ({ children }: any) => {
  return (
    <div className={styles.option}>
      <Title></Title>
      <Body>{children}</Body>
    </div>
  );
};

const Title = ({ children }: any) => {
  return <div className={styles.title}>{children}</div>;
};

const Body = ({ children }: any) => {
  return <div className={styles.body}>{children}</div>;
};

export default Option;
