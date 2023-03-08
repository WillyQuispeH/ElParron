import React from "react";

import Screen from "@/components/layout/Screen";
import Logo from "@/components/ui/Logo";
import Header from "@/components/ui/Header";
import SideBar from "@/components/ui/SideBar";

const Welcome = () => {
  return (
    <Screen>
      <Header/>
      <SideBar/>
      <Logo width="736px" height="505px"/>
    </Screen>
  );
};

export default Welcome;
