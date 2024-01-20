import Link from 'next/link';
import { FC, ReactNode } from 'react';

import styles from  './layout.module.css';

interface IAboutLayoutProps {
  children: ReactNode;
}

const AboutLayout: FC<IAboutLayoutProps> = ({ children }) => {
  return (
    <div className={styles['about-layout']}>
      <h1 className={styles['about-layout__header']}>About us</h1>
      <ul className={styles['about-layout__list']}>
        <li className={styles['about-layout__list-item']}>
          <Link className={styles['about-layout__link']} href="/about/contacts">
            Contacts
          </Link>
        </li>
        <li className={styles['about-layout__list-item']}>
          <Link className={styles['about-layout__link']} href="/about/team">
            Team
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
