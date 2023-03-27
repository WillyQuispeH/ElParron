import { create } from "zustand";

import { ICostPrices, IPublicPrices } from "@/interfaces/Price";

import apiInstance from "@/util/api";

type priceState = {
  CostPrices: ICostPrices[];
  PublicPrices: IPublicPrices[];
  isLoading: boolean;
  isError: boolean;
  error: string;

  getCostPrices: () => void;
  getPublicPrices: () => void;
};

export const priceStore = create<priceState>((set, get) => ({
  CostPrices: [],
  PublicPrices: [],
  isLoading: false,
  isError: false,
  error: "",

  getCostPrices: async () => {
    try {
      set((state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }));

      const { data } = await apiInstance.get("/price/getCostPrices");

      set((state) => ({
        ...state,
        CostPrices: data,
        isLoading: false,
        isError: false,
        error: "",
      }));
    } catch (e) {
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: (e as Error).message,
      }));
    }
  },

  getPublicPrices: async () => {
    try {
      set((state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }));

      const { data } = await apiInstance.get("/price/getPublicPrices");

      set((state) => ({
        ...state,
        PublicPrices: data,
        isLoading: false,
        isError: false,
        error: "",
      }));

    } catch (e) {
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: (e as Error).message,
      }));
    }
  },
  
}));
