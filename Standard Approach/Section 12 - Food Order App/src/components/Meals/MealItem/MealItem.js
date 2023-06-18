import styles from "./MealItem.module.css";

const MealItem = (props) => {
  //(2) - render to 2 decimal place in this context
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
