import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.home} data-testid="home-link">
    <h1>Welcome to our page!</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
      veritatis animi excepturi explicabo reiciendis, quaerat vitae saepe quam
      impedit expedita suscipit ut, blanditiis neque voluptate voluptatibus.
      Veritatis excepturi dolor ut!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
      veritatis animi excepturi explicabo reiciendis, quaerat vitae saepe quam
      impedit expedita suscipit ut, blanditiis neque voluptate voluptatibus.
      Veritatis excepturi dolor ut!
    </p>
  </div>
);

export default Home;
