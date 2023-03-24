import { UiProvider } from "@/context/ui";
import type { AppProps } from "next/app";

import useUser from "@/store/hooks";

import Login from "@/components/funcional/Login";
import Template from "@/components/layout/Template";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const {user} = useUser();
  return (
    <UiProvider>
     { user.id ? <Template><Component {...pageProps} /></Template>:<Login/>}
    </UiProvider>
    
  );
}
