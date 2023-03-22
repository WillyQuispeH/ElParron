import React, { useContext } from "react";
import { useRouter } from "next/router";

import { Row } from "@/components/layout/Generic/Generic";
import UIContext from "@/context/ui";
import ButtonIcon from "../ButtonIcon";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const { sidebar, setSidebar } = useContext(UIContext);

  const hanOnclickSideBar = () => {
    setSidebar(!sidebar);
  };

  const handleClickOption = () => {
    router.push("/welcome");
  };

  const handleClickUser = () => {
    router.push("/user");
  };

  return (
    <div className={styles.header}>
      <ButtonIcon onclick={hanOnclickSideBar} typeButton="square" icon="menu" />
      <Row gap="10px">
        <ButtonIcon
          onclick={handleClickOption}
          typeButton="square"
          icon="home"
        />
        <ButtonIcon onclick={null} typeButton="square" icon="monitoring" />
        <ButtonIcon onclick={null} typeButton="square" icon="qr_code_2" />
        <ButtonIcon onclick={null} typeButton="square" icon="inbox" />
        <ButtonIcon
          onclick={handleClickUser}
          typeButton="circle"
          icon="person"
        />
      </Row>
    </div>
  );
};

export default Header;
