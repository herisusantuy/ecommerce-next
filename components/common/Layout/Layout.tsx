import { FC, ReactNode } from 'react';
import s from './Layout.module.css';
import { Footer, NavBar } from '@components/common';

type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={s.root}>
      <NavBar />
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
