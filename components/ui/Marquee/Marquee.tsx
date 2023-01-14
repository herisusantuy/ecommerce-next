import React, { ReactNode, FC } from 'react';
import Ticker from 'react-fast-marquee';
import cn from 'classnames';
import s from './Marquee.module.css';

interface Props {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}
const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  const rootClassName = cn(s.root, {
    [s.secondary]: variant === 'secondary'
  });
  return (
    <div className={rootClassName}>
      <Ticker speed={30}>
        <div className={s.container}>{children}</div>
      </Ticker>
    </div>
  );
};

export default Marquee;
