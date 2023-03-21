import { UiProvider } from "@/context/ui";
import type { AppProps } from "next/app";

import { useUser } from "@/context/loginUser";

import Login from "@/components/funcional/Login";
import Template from "@/components/layout/Template";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
     { useUser(state => state.rut) ? <Template><Component {...pageProps} /></Template>: <Login/>}
    </UiProvider>
  );
}
