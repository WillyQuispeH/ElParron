import React, { useEffect, useState } from "react";

import Screen from "@/components/layout/Screen";
import SubMenu from "@/components/layout/SubMenu";
import Header from "@/components/ui/Header";
import SideBar from "@/components/ui/SideBar";
import Title from "@/components/ui/Title";
import InputText from "@/components/ui/InputText";
import Button from "@/components/ui/Button";
import apiInstance from "@/util/api";

import { Column } from "@/components/layout/Generic/Generic";
import { regexEmail, regexPhone } from "@/util/regEx";
import { validateRut, formatRut, notFormatRut } from "@/util/validateRut";

const User = () => {
  const initialForm = {
    rut: { value: "", isvalid: true },
    name: { value: "", isvalid: true },
    paternalLastName: { value: "", isvalid: true },
    maternalLastName: { value: "", isvalid: true },
    email: { value: "", isvalid: true },
    phone: { value: "", isvalid: true },
    address: { value: "", isvalid: true },
    district: { value: "", isvalid: true },
    password: { value: "", isvalid: true },
  };

  const [form, setForm] = useState(initialForm);
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    form.rut.isvalid &&
    form.rut.value &&
    form.name.isvalid &&
    form.name.value &&
    form.paternalLastName.isvalid &&
    form.paternalLastName.value &&
    form.maternalLastName.isvalid &&
    form.maternalLastName.value &&
    form.email.isvalid &&
    form.email.value &&
    form.phone.isvalid &&
    form.phone.value &&
    form.address.isvalid &&
    form.address.value &&
    form.district.isvalid &&
    form.district.value &&
    form.password.isvalid &&
    form.password.value
      ? setButtonDisable(false)
      : setButtonDisable(true);
  });

  const handleOnChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
      },
    });

    validateForm(form, e);
  };

  const handleOnBlur = (e: any) => {
    if (e.target.name == "rut") {
      setForm({
        ...form,
        rut: {
          value: formatRut(e.target.value),
          isvalid: validateRut(e.target.value.trim()),
        },
      });
    }
  };

  const handleOnFocus = (e: any) => {
    if (e.target.name == "rut") {
      setForm({
        ...form,
        rut: {
          value: notFormatRut(e.target.value),
          isvalid: validateRut(e.target.value.trim()),
        },
      });
    }
  };

  const validateForm = (form: any, e: any) => {
    const maxLength = (text: string) => {
      return text.trim().length > 0 ? true : false;
    };

    if (e.target.name == "rut") {
      setForm({
        ...form,
        rut: {
          value: e.target.value,
          isvalid: validateRut(e.target.value.trim()),
        },
      });
    }

    if (e.target.name == "name") {
      setForm({
        ...form,
        [e.target.name]: {
          value: e.target.value,
          isvalid: maxLength(e.target.value),
        },
      });
    }

    if (e.target.name == "paternalLastName") {
      setForm({
        ...form,
        [e.target.name]: {
          value: e.target.value,
          isvalid: maxLength(e.target.value),
        },
      });
    }

    if (e.target.name == "maternalLastName") {
      setForm({
        ...form,
        [e.target.name]: {
          value: e.target.value,
          isvalid: maxLength(e.target.value),
        },
      });
    }

    if (e.target.name == "email") {
      setForm({
        ...form,
        email: {
          value: e.target.value,
          isvalid: regexEmail.test(e.target.value.trim()),
        },
      });
    }

    if (e.target.name == "phone") {
      setForm({
        ...form,
        phone: {
          value: e.target.value,
          isvalid: regexPhone.test(e.target.value.trim()),
        },
      });
    }

    if (e.target.name == "address") {
      setForm({
        ...form,
        address: {
          value: e.target.value,
          isvalid: maxLength(e.target.value),
        },
      });
    }

    if (e.target.name == "district") {
      setForm({
        ...form,
        [e.target.name]: {
          value: e.target.value,
          isvalid: maxLength(e.target.value),
        },
      });
    }

    if (e.target.name == "password") {
      setForm({
        ...form,
        [e.target.name]: {
          value: e.target.value,
          isvalid: maxLength(e.target.value),
        },
      });
    }
  };

  const handleOnclickCreate = async () => {
    const credentials = {
      rut: form.rut.value,
      name: form.name.value,
      paternallastname: form.paternalLastName.value,
      maternallastname: form.maternalLastName.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      district: form.district.value,
      password: form.password.value,
    };

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
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            label="Rut"
            type="text"
            width="300px"
            value={form.rut.value}
            name="rut"
            isValid={form.rut.isvalid}
          />
          <InputText
            onChange={handleOnChange}
            label="Nombre"
            type="text"
            width="300px"
            value={form.name.value}
            name="name"
            isValid={form.name.isvalid}
          />
          <InputText
            onChange={handleOnChange}
            label="Apellido Paterno"
            type="text"
            width="300px"
            value={form.paternalLastName.value}
            name="paternalLastName"
            isValid={form.paternalLastName.isvalid}
          />
          <InputText
            onChange={handleOnChange}
            label="Apellido Materno"
            type="text"
            width="300px"
            value={form.maternalLastName.value}
            name="maternalLastName"
            isValid={form.maternalLastName.isvalid}
          />
          <InputText
            onChange={handleOnChange}
            label="Email"
            type="text"
            width="300px"
            value={form.email.value}
            name="email"
            isValid={form.email.isvalid}
          />
          <InputText
            onChange={handleOnChange}
            label="Teléfono"
            type="text"
            width="300px"
            value={form.phone.value}
            name="phone"
            isValid={form.phone.isvalid}
            maxLength={9}
          />
          <InputText
            onChange={handleOnChange}
            label="Dirección"
            type="text"
            width="300px"
            value={form.address.value}
            name="address"
            isValid={form.address.isvalid}
          />
          <InputText
            onChange={handleOnChange}
            label="Comuna"
            type="text"
            width="300px"
            value={form.district.value}
            name="district"
            isValid={form.district.isvalid}
          />
          <InputText
            onChange={handleOnChange}
            label="Contraseña"
            type="password"
            width="300px"
            value={form.password.value}
            name="password"
            isValid={form.password.isvalid}
          />
        </Column>
        <Button
          onClick={handleOnclickCreate}
          valor="Insertar"
          width="200px"
          height="40px"
          disabled={buttonDisable}
        />
      </Column>
    </Screen>
  );
};

export default User;
