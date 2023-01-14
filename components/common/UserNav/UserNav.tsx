import React, { FC } from 'react';
import Link from 'next/link';
import s from './UserNav.module.css';
import { Bag as Cart, Heart } from '@components/icons';

const UserNav: FC = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href='/cart'>
            <Cart />
          </Link>
        </li>
        <li className={s.item}>
          <Link href='/wishlist'>
            <Heart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
