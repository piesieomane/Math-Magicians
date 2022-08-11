/* eslint-disable */
import React from "react";
import styles from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.quote_home} data-testid={"quote-link"}>
      <p>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. –William Paul Thurston
      </p>
    </div>
  );
};

export default Quote;
