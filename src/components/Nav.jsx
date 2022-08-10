/* eslint-disable */
import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const LINKS = [
  { to: "/home", text: "Home", data_testid: "home-link" },
  { to: "/calculator", text: "Calculator", data_testid: "calculator-link" },
  { to: "/about", text: "About", data_testid: "about-link" },
];

const Navs = () => (
  <div className={styles.navFlex} data-testid="navbar">
    <h1> MATH MAGICIANS</h1>
    <ul className={styles.navItem}>
      {LINKS.map((item) => (
        <li key={item.to}>
          {" "}
          <a
            to={item.to}
            data-testid={item.data_testid}
            className={styles.Nav_link}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navs;
