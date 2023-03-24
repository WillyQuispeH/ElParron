import { userStore } from "../zustand";

const useUser = () => {
  const {
    user,
    list: userList,
    isLoading: isLoadingUser,
    isError:isErrorUser,
    error:errorUser,
  } = userStore((state) => ({
    user: state.user,
    list: state.list,
    isLoading: state.isLoading,
    isError: state.isError,
    error: state.error,
  }));

  const {
    getAll: getAllUser,
    create: createUser,
    assignPassword,
    validate: validateUser,
    recoveryPassword,
  } = userStore();

  return {
    user,
    userList,
    isLoadingUser,
    isErrorUser,
    errorUser,
    getAllUser,
    createUser,
    assignPassword,
    validateUser,
    recoveryPassword,
  };
};

export default useUser;
