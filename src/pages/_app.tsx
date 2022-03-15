import { AppProps } from "next/app";
import React, { FC } from "react";
import I18nProvider from "src/providers/i18nProvider";
import { wrapper } from "../store/store";
import "../styles/reset.scss";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <I18nProvider>
    <Component {...pageProps} />
  </I18nProvider>
);

export default wrapper.withRedux(WrappedApp);
