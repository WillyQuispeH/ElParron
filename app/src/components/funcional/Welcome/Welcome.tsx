import React from "react";

import { useUser } from "@/context/loginUser";
import { Column } from "@/components/layout/Generic/Generic";

import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";

const Welcome = () => {

  const {rut, name, paternalLastName, maternalLastName, email} = useUser(state => ({
    rut:state.rut,
    name:state.name,
    paternalLastName:state.paternalLastName,
    maternalLastName:state.maternalLastName,
    email:state.email
  }));
  
  return (
      <Column gap="20px">
        <Logo width="436px" height="305px" />
        <Text text={"Bienvenido: " + name +" " + paternalLastName +" "+ maternalLastName} />
        <Text text={"Rut: "+ rut} />
        <Text text={"Email: "+email} />
      </Column>
  );
};

export default Welcome;
