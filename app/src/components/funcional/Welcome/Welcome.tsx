import React from "react";

import { Column } from "@/components/layout/Generic/Generic";

import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import useUser from "@/store/hooks";

const Welcome = () => {

  const {user} = useUser();
  return (    
      <Column gap="20px">
        <Logo width="436px" height="305px" />
        <Text text={"Bienvenido: " + user.name+" " + user.paternalLastName +" "+ user.maternalLastName} />
        <Text text={"Rut: "+ user.rut} />
        <Text text={"Email: "+user.email} />
      </Column>
  );
};

export default Welcome;
