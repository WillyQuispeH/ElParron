import { create } from "zustand";

type UseType = {
  rut: string;
  name: string;
  paternalLastName: string;
  maternalLastName: string;
  email: string;
  setUser: (rut: string,
    name: string,
    paternalLastName: string,
    maternalLastName: string,
    email: string)=>void
};

const useUser = create<UseType>((set) => ({
  rut: "",
  name: "",
  paternalLastName: "",
  maternalLastName: "",
  email: "",
  setUser: (
    rut: string,
    name: string,
    paternalLastName: string,
    maternalLastName: string,
    email: string
  ) =>
    set ({
      rut: rut,
      name: name,
      paternalLastName: paternalLastName,
      maternalLastName: maternalLastName,
      email: email,
    })

}));

export { useUser };
