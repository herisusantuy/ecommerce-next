import React, { FC } from 'react';
import Link from 'next/link';
import s from './NavBar.module.css';
import { UserNav } from '@components/common';
import { Container } from '@components/ui';

const NavBar: FC = () => {
  return (
    <Container>
      <div className={s.root}>
        <div className='flex flex-1 items-center'>
          <Link href='/' className={s.logo}>
            INDAH STORE
          </Link>
          <nav className='ml-6 space-x-6'>
            <Link href='/' className={s.link}>
              All
            </Link>
            <Link href='/' className={s.link}>
              Clothes
            </Link>
            <Link href='/' className={s.link}>
              Accessories
            </Link>
            <Link href='/' className={s.link}>
              Shoes
            </Link>
          </nav>
        </div>
        <div className='flex flex-1 justify-end space-x-8'>
          <UserNav />
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
