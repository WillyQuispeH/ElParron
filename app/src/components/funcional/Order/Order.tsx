import React, { useState } from "react";

import { Column, Row } from "../../layout/Generic/Generic";
import Screen from "@/components/layout/Screen";
import SubMenu from "@/components/layout/SubMenu";
import ComboBox from "@/components/ui/ComboBox";
import InputDate from "@/components/ui/InputDate";
import InputText from "@/components/ui/InputText";
import SideBar from "@/components/ui/SideBar";
import Title from "@/components/ui/Title";
import Header from "@/components/ui/Header";

const Order = () => {
  const InputDataShape = [
    {
      id: "1",
      value: "Opción 1",
    },
    {
      id: "1",
      value: "Opción 2",
    },
  ];

  return (
    <Screen>
      <Header />
      <SideBar />
      <SubMenu>
        <Title title="Pedidos" />
        <Row gap="5px">
          <InputText width="370px" label="Etiqueta" place="Text" type="text" />
          <ComboBox
            width="184px"
            label="Sucursal"
            data={InputDataShape}
            valueName="id"
            textName="value"
          />
          <InputDate width="138px" label="Fecha" />
        </Row>
      </SubMenu>
      <Row gap="20px">
        <Column gap="20px">
          <Column gap="5px">
            <Row gap="5px">
              <InputText
                width="140px"
                label="Rut"
                place="11.111.111-1"
                type="text"
              />
              <InputText
                width="300px"
                label="Nombre"
                place="Julio Rodriguez Acevedo"
                type="text"
              />
            </Row>
            <Row gap="5px">
              <InputText
                width="300px"
                label="Correo electrónico"
                place="julio@gmai.com"
                type="email"
              />
              <InputText
                width="140px"
                label="Teléfono"
                place="+569 9934 1234"
                type="text"
              />
            </Row>
          </Column>
          <Row gap="5px">
            <Column gap="5px">
              <ComboBox
                width="220px"
                label="Forma"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
              <ComboBox
                width="220px"
                label="Forma"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
              <ComboBox
                width="220px"
                label="Forma"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
              <ComboBox
                width="220px"
                label="Forma"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
            </Column>
            <Column gap="5px">
              <ComboBox
                width="220px"
                label="Forma"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
              <ComboBox
                width="220px"
                label="Forma"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
              <ComboBox
                width="220px"
                label="Forma"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
            </Column>
          </Row>
          <Column gap="5px">
            <InputText
              width="445px"
              label="Rut"
              place="11.111.111-1"
              type="text"
            />
            <InputText
              width="445px"
              label="Rut"
              place="11.111.111-1"
              type="text"
            />
          </Column>
        </Column>
        <Column gap="20px">
          <Column gap="5px">
            <Row gap="5px">
              <ComboBox
                width="266px"
                label="Sucursal"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
            </Row>
            <Row gap="5px">
              <InputDate width="160px" label="Fecha" />
              <ComboBox
                width="100px"
                label="Hora"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
            </Row>
          </Column>
          <Column gap="5px">
            <Row gap="5px">
              <InputText
                width="130px"
                label="Precio"
                place="$10.000"
                type="text"
              />
              <InputText
                width="130px"
                label="Abono"
                place="$10.000"
                type="text"
              />
            </Row>
            <Column gap="5px">
              <ComboBox
                width="266px"
                label="Tipo de Pago"
                data={InputDataShape}
                valueName="id"
                textName="value"
              />
              <InputText
                width="266px"
                label="Estado de pago"
                place="Pendiente"
                type="text"
              />
              <InputText
                width="266px"
                label="Estado de pedido"
                place="En camara"
                type="text"
              />
            </Column>
          </Column>
          <Column gap="5px">
            <InputText
              width="266px"
              label="Usuario"
              place="Juan Perez"
              type="text"
            />
            <Row gap="5px">
              <InputText
                width="160px"
                label="Fecha"
                place="12/02/2022"
                type="text"
              />
              <InputText width="100px" label="Hora" place="15:12" type="text" />
            </Row>
          </Column>
        </Column>
      </Row>
    </Screen>
  );
};

export default Order;
