import { AppProps } from 'next/app';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Noop: FC<Props> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
