import React from "react";

import Screen from "@/components/layout/Screen";
import SubMenu from "@/components/layout/SubMenu";
import Header from "@/components/ui/Header";
import SideBar from "@/components/ui/SideBar";
import Title from "@/components/ui/Title";

const SpecialDough = () => {
  return (
    <Screen>
      <Header />
      <SideBar />
      <SubMenu>
        <Title title="Masas especiales" />
      </SubMenu>
      <Title title="Masas especiales" />
    </Screen>
  );
};

export default SpecialDough;
