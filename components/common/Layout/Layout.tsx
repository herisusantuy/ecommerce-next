import { FC, ReactNode } from 'react';
import s from './Layout.module.css';
import { Footer, NavBar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import { useUI } from '@components/ui/ context';

type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  const { isSidebarOpen } = useUI();
  return (
    <div className={s.root}>
      <NavBar />
      <Sidebar isOpen={isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
