import { AppProps } from 'next/app';
import { FC, ReactNode } from 'react';
import '@assets/main.css';
import { UIProvider, useUI } from '@components/ui/ context';

type Props = {
  children: ReactNode;
};

const Noop: FC<Props> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps
}: AppProps & { Component: { Layout: FC<Props> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
