import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const LINKS = [
  { to: '/home', text: 'Home' },
  { to: '/calculator', text: 'Calculator' },
  { to: '/about', text: 'About' },
];

const Navs = () => (
  <div className={styles.navFlex}>
    <h1> MATH MAGICIANS</h1>
    <ul className={styles.navItem}>
      {LINKS.map((item) => (
        <li key={item.to}>
          {' '}
          <NavLink to={item.to} className={styles.Nav_link}>
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navs;
