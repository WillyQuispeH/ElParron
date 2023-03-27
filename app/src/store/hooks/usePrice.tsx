import { priceStore } from "../zustand";

const usePrice = () => {
  const { CostPrices, PublicPrices, isLoading, isError, error } = priceStore(
    (state) => ({
      CostPrices: state.CostPrices,
      PublicPrices: state.PublicPrices,
      isLoading: state.isLoading,
      isError: state.isError,
      error: state.error,
    })
  );

  const { getCostPrices, getPublicPrices } = priceStore();

  return {
    CostPrices,
    PublicPrices,
    isLoading,
    isError,
    error,
    getCostPrices,
    getPublicPrices,
  };
};

export default usePrice;
