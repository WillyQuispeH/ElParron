import React, { useState } from "react";
import { useRouter } from "next/router";

import { Column } from "@/components/layout/Generic/Generic";
import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import InputText from "@/components/ui/InputText";
import Link from "@/components/ui/Link";
import Logo from "@/components/ui/Logo";

import apiInstance from "@/util/api";
import { useUser } from "@/context/loginUser";
import { regexEmail } from "@/util/regEx";

const Login = () => {
  const inicialForm = {
    email: "",
    password: "",
  };
  const router = useRouter();

  const userLogin = useUser((state) => state.setUser);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [form, setForm] = useState(inicialForm);


  const handleOnChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (e.target.name == "email") {
      regexEmail.test(e.target.value.trim())
        ? setIsValidEmail(true)
        : setIsValidEmail(false);
    }
  };

  const handleOnclickLogin = async () => {
    const credentials = form;

    const resultValidate = await apiInstance.post(
      "/user/validate",
      credentials
    );

    if (resultValidate.data.sucess) {
      userLogin(
        resultValidate.data.data.rut,
        resultValidate.data.data.name,
        resultValidate.data.data.paternallastname,
        resultValidate.data.data.maternallastname,
        resultValidate.data.data.email
      );
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
              name="email"
              width="300px"
              value={form.email}
              onChange={handleOnChange}
              isValid={isValidEmail}
            />
            <InputText
              label="Contraseña"
              type="password"
              width="300px"
              name="password"
              value={form.password}
              onChange={handleOnChange}
            />
          </Column>
          <Button
            onClick={handleOnclickLogin}
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
