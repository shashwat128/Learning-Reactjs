import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "b1",
    price: 12.98,
    title: "Harry Potter",
    description: "Jhadu pe udne vala, jadui chashmish ladka.",
  },
  {
    id: "b2",
    price: 8.51,
    title: "Intelligent Investor",
    description: "Dimag lagayen, paisa kamayen.",
  },
  {
    id: "b3",
    price: 10.37,
    title: "Rich Dad, Poor Dad!",
    description: "Paisa banayen na ki gavayen.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
