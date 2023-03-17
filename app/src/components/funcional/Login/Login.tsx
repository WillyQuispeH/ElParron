import React, { useState } from "react";
import { useRouter } from "next/router";

import { Column } from "@/components/layout/Generic/Generic";
import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import InputText from "@/components/ui/InputText";
import Link from "@/components/ui/Link";
import Logo from "@/components/ui/Logo";

import apiInstance from "@/util/api";

const Login = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleOnChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const HandleOnChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const HandleOnclickLogin = async () => {
    const credentials = {
      email,
      password,
    };

    const resultValidate = await apiInstance.post(
      "/user/validate",
      credentials
    );
    
    if (resultValidate.data.data) {
      router.push("/welcome");
    } else {
      alert("Acceso Denegado");
    }
  };

  return (
    <Screen>
      <Column gap="65px">
        <Logo width="300px" height="205px" />
        <Column gap="28px">
          <Column gap="5px">
            <InputText
              label="Correo electrónico"
              type="email"
              width="300px"
              value={email}
              onChange={HandleOnChangeEmail}
            />
            <InputText
              label="Contraseña"
              type="password"
              width="300px"
              value={password}
              onChange={HandleOnChangePassword}
            />
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
