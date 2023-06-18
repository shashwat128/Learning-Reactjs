import React from "react";

import mealsList from "./dummyMeals";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
