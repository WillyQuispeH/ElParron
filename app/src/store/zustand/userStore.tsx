import { create } from "zustand";

import { IUser } from "@/interfaces/User";

import apiInstance from "@/util/api";

type userState = {
  user: IUser;
  list: IUser[];
  getAll: () => void;
  create: (
    rut: string,
    name: string,
    paternallastname: string,
    maternallastname: string,
    email: string,
    phone: string,
    address: string,
    district: string,
    password: string
  ) => void;
  assignPassword: (id: string, password: string) => void;
  validate: (email: string, password: string) => void;
  recoveryPassword: (email: string) => void;
};

const initData = {
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

export const userStore = create<userState>((set, get) => ({
  user: initData,
  list: [],

  getAll: async () => {
    const { data } = await apiInstance.get("/user/getAll");
    set((state) => ({ ...state, list: data }));
  },

  create: async (
    rut: string,
    name: string,
    paternallastname: string,
    maternallastname: string,
    email: string,
    phone: string,
    address: string,
    district: string,
    password: string
  ) => {
    const { data } = await apiInstance.post("/user/create", {
      rut,
      name,
      paternallastname,
      maternallastname,
      email,
      phone,
      address,
      district,
      password,
    });
    set((state) => ({ ...state, user: data }));
  },

  assignPassword: async (id: string, password: string) => {
    const { data } = await apiInstance.put("/user/assignPassword", {
      id,
      password,
    });
    set((state) => ({ ...state, user: data }));
  },

  validate: async (email: string, password: string) => {
    const { data } = await apiInstance.post("/user/validate", {
      email,
      password,
    });
    set((state) => ({ ...state, user: data }));
  },

  recoveryPassword: async (email: string) => {
    const { data } = await apiInstance.post("user/recoveryPassword", { email });
    set((state) => ({ ...state, user: data }));
  },

}));

