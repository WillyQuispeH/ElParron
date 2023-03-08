import React from "react";
import { useRouter } from "next/router";

import { Column } from "@/components/layout/Generic/Generic";
import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import InputText from "@/components/ui/InputText";
import Link from "@/components/ui/Link";
import Logo from "@/components/ui/Logo";

const Login = () => {
  const router = useRouter();

  const HandleOnclickLogin = () => {
    router.push("/welcome");
  };

  return (
    <Screen>
      <Column gap="65px">
        <Logo width="300px" height="205px" />
        <Column gap="28px">
          <Column gap="5px">
            <InputText label="Correo electrónico" type="email" width="300px" />
            <InputText label="Contraseña" type="password" width="300px" />
          </Column>
          <Button
            onclick={HandleOnclickLogin}
            valor="Ingresar"
            width="200px"
            height="40px"
          />
          <Link valor="Olvidé mi contraseña" />
        </Column>
      </Column>
    </Screen>
  );
};

export default Login;
