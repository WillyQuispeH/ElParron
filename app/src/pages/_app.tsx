import { UiProvider } from "@/context/ui";
import type { AppProps } from "next/app";

import useUser from "@/store/hooks";
import usePrice from "@/store/hooks/usePrice";

import Login from "@/components/funcional/Login";
import Template from "@/components/layout/Template";
import Message from "@/components/ui/Message";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {

  const { user } = useUser();
  const { error, isError } = usePrice();
  const { errorUser, isErrorUser } = useUser();

  return (
    <UiProvider>
      {user.id ? (
        <Template>
          <Component {...pageProps} />
          {isError ? (
            <Message
              msg={`${error} Por favor contactar con el administrador`}
              background="#dc3545"
            />
          ) : null}
          {isErrorUser ? (
            <Message
              msg={`${errorUser} Por favor contactar con el administrador`}
              background="#dc3545"
            />
          ) : null}
        </Template>
      ) : (
        <Login />
      )}
    </UiProvider>
  );
}
