import { ReactNode } from 'react';

import Link from 'next/link';

import styles from './Button.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: string;
};

export const Button = ({ children, className, onClick, href, as }: Props) => {
  const allClassName = `${styles.button} ${className}`;
  if (href) {
    return (
      <Link href={href} as={as} passHref>
        <a className={allClassName}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={allClassName}>
      {children}
    </button>
  );
};
