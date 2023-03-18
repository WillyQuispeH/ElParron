import React from "react";

import { useUser } from "@/context/loginUser";

import Screen from "@/components/layout/Screen";
import Logo from "@/components/ui/Logo";
import Header from "@/components/ui/Header";
import SideBar from "@/components/ui/SideBar";
import { Column } from "@/components/layout/Generic/Generic";
import Title from "@/components/ui/Title";

const Welcome = () => {

  const {rut, name, paternalLastName, maternalLastName, email} = useUser(state => ({
    rut:state.rut,
    name:state.name,
    paternalLastName:state.paternalLastName,
    maternalLastName:state.maternalLastName,
    email:state.email
  }))
  
  return (
    <Screen>
      <Header />
      <SideBar />
      <Column gap="20px">
        <Logo width="436px" height="305px" />
        <Title title={"Bienvenido: " + name +" " + paternalLastName +" "+ maternalLastName} />
        <Title title={"Rut: "+ rut} />
        <Title title={"Email: "+email} />
      </Column>
    </Screen>
  );
};

export default Welcome;
