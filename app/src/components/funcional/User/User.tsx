import React, { useState } from "react";

import Screen from "@/components/layout/Screen";
import SubMenu from "@/components/layout/SubMenu";
import Header from "@/components/ui/Header";
import SideBar from "@/components/ui/SideBar";
import Title from "@/components/ui/Title";
import InputText from "@/components/ui/InputText";
import Button from "@/components/ui/Button";
import apiInstance from "@/util/api";

import { Column } from "@/components/layout/Generic/Generic";

const User = () => {
  const initialForm = {
    rut: "",
    name: "",
    paternallastname: "",
    maternallastname: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleOnChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnclickCreate = async (e: any) => {
    e.preventDefault();

    const credentials = form;
    const resultCreate = await apiInstance.post("/user/create", credentials);

    if (resultCreate.data.sucess) {
      alert("Usuario Registrado");
    } else {
      alert("Error");
    }
  };

  return (
    <Screen>
      <Header />
      <SideBar />
      <SubMenu>
        <Title title="Create User" />
      </SubMenu>
      <Column gap="20px">
        <Title title="Create User" />
        <Column gap="5px">
          <InputText
            onChange={handleOnChange}
            label="Rut"
            type="text"
            width="300px"
            value={form.rut}
            name="rut"
          />
          <InputText
            onChange={handleOnChange}
            label="Nombre"
            type="text"
            width="300px"
            value={form.name}
            name="name"
          />
          <InputText
            onChange={handleOnChange}
            label="Apellido Paterno"
            type="text"
            width="300px"
            value={form.paternallastname}
            name="paternallastname"
          />
          <InputText
            onChange={handleOnChange}
            label="Apellido Materno"
            type="text"
            width="300px"
            value={form.maternallastname}
            name="maternallastname"
          />
          <InputText
            onChange={handleOnChange}
            label="Email"
            type="text"
            width="300px"
            value={form.email}
            name="email"
          />
          <InputText
            onChange={handleOnChange}
            label="Teléfono"
            type="text"
            width="300px"
            value={form.phone}
            name="phone"
          />
          <InputText
            onChange={handleOnChange}
            label="Dirección"
            type="text"
            width="300px"
            value={form.address}
            name="address"
          />
          <InputText
            onChange={handleOnChange}
            label="Distrito"
            type="text"
            width="300px"
            value={form.district}
            name="district"
          />
          <InputText
            onChange={handleOnChange}
            label="Contraseña"
            type="password"
            width="300px"
            value={form.password}
            name="password"
          />
        </Column>
        <Button
          onClick={handleOnclickCreate}
          valor="Insertar"
          width="200px"
          height="40px"
        />
      </Column>
    </Screen>
  );
};

export default User;
