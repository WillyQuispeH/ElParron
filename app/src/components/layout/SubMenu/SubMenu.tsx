import React from "react";

import styles from "./SubMenu.module.scss";

const SubMenu = ({ children }: any) => {
  return <div className={styles.SubMenu}>{children}</div>;
};

export default SubMenu;
