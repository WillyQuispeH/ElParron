import React, { useState } from "react";

import { Column, Row } from "../../layout/Generic/Generic";

import ComboBox from "@/components/ui/ComboBox";
import InputDate from "@/components/ui/InputDate";
import InputText from "@/components/ui/InputText";
import Option from "@/components/layout/Option";

const Order = () => {
  const inputDataShape = [
    {
      id: "1",
      value: "Opción 1",
    },
    {
      id: "2",
      value: "Opción 2",
    },
  ];

  return (
    <>
      <Option>
        <Row gap="20px">
          <Column gap="20px">
            <Column gap="5px">
              <Row gap="5px">
                <InputText
                  width="140px"
                  label="Rut"
                  place="11.111.111-1"
                  type="text"
                  value=""
                  onChange={null}
                />
                <InputText
                  width="300px"
                  label="Nombre"
                  place="Julio Rodriguez Acevedo"
                  type="text"
                  value=""
                  onChange={null}
                />
              </Row>
              <Row gap="5px">
                <InputText
                  width="300px"
                  label="Correo electrónico"
                  place="julio@gmai.com"
                  type="email"
                  value=""
                  onChange={null}
                />
                <InputText
                  width="140px"
                  label="Teléfono"
                  place="+569 9934 1234"
                  type="text"
                  value=""
                  onChange={null}
                />
              </Row>
            </Column>
            <Row gap="5px">
              <Column gap="5px">
                <ComboBox
                  width="220px"
                  label="Forma"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
                <ComboBox
                  width="220px"
                  label="Forma"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
                <ComboBox
                  width="220px"
                  label="Forma"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
                <ComboBox
                  width="220px"
                  label="Forma"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
              </Column>
              <Column gap="5px">
                <ComboBox
                  width="220px"
                  label="Forma"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
                <ComboBox
                  width="220px"
                  label="Forma"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
                <ComboBox
                  width="220px"
                  label="Forma"
                  data={inputDataShape}
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
                value=""
                onChange={null}
              />
              <InputText
                width="445px"
                label="Rut"
                place="11.111.111-1"
                type="text"
                value=""
                onChange={null}
              />
            </Column>
          </Column>
          <Column gap="20px">
            <Column gap="5px">
              <Row gap="5px">
                <ComboBox
                  width="266px"
                  label="Sucursal"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
              </Row>
              <Row gap="5px">
                <InputDate width="160px" label="Fecha" />
                <ComboBox
                  width="100px"
                  label="Hora"
                  data={inputDataShape}
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
                  value=""
                  onChange={null}
                />
                <InputText
                  width="130px"
                  label="Abono"
                  place="$10.000"
                  type="text"
                  value=""
                  onChange={null}
                />
              </Row>
              <Column gap="5px">
                <ComboBox
                  width="266px"
                  label="Tipo de Pago"
                  data={inputDataShape}
                  valueName="id"
                  textName="value"
                />
                <InputText
                  width="266px"
                  label="Estado de pago"
                  place="Pendiente"
                  type="text"
                  value=""
                  onChange={null}
                />
                <InputText
                  width="266px"
                  label="Estado de pedido"
                  place="En camara"
                  type="text"
                  value=""
                  onChange={null}
                />
              </Column>
            </Column>
            <Column gap="5px">
              <InputText
                width="266px"
                label="Usuario"
                place="Juan Perez"
                type="text"
                value=""
                onChange={null}
              />
              <Row gap="5px">
                <InputText
                  width="160px"
                  label="Fecha"
                  place="12/02/2022"
                  type="text"
                  value=""
                  onChange={null}
                />
                <InputText
                  width="100px"
                  label="Hora"
                  place="15:12"
                  type="text"
                  value=""
                  onChange={null}
                />
              </Row>
            </Column>
          </Column>
        </Row>
      </Option>
    </>
  );
};

export default Order;
