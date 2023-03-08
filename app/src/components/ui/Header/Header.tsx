import React, { useContext } from "react";
import { useRouter } from "next/router";

import { Row } from "@/components/layout/Generic/Generic";
import UIContext from "@/context/ui";

import ButtonIcon from "../ButtonIcon";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const { sidebar, setSidebar } = useContext(UIContext);

  const HanOnclickSideBar = () => {
    setSidebar(!sidebar);
  };

  const HandleClickOption = () => {
    router.push("/welcome");
  };

  return (
    <div className={styles.header}>
      <ButtonIcon
        onclick={HanOnclickSideBar}
        typeButton="square"
        icon="menu"
      ></ButtonIcon>
      <Row gap="10px">
        <ButtonIcon
          onclick={HandleClickOption}
          typeButton="square"
          icon="home"
        ></ButtonIcon>
        <ButtonIcon
          onclick={null}
          typeButton="square"
          icon="monitoring"
        ></ButtonIcon>
        <ButtonIcon
          onclick={null}
          typeButton="square"
          icon="qr_code_2"
        ></ButtonIcon>
        <ButtonIcon
          onclick={null}
          typeButton="square"
          icon="inbox"
        ></ButtonIcon>
        <ButtonIcon
          onclick={null}
          typeButton="circle"
          icon="person"
        ></ButtonIcon>
      </Row>
    </div>
  );
};

export default Header;
