import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  {
    id: "p1",
    title: "Bed For Two",
    price: 95,
    description: "A king-size bed for cosy bedroom",
  },
  {
    id: "p2",
    title: "TV-Set",
    price: 235,
    description: "Big Plasma TV for large wall",
  },
  {
    id: "p3",
    title: "Laptop Computer",
    price: 156,
    description: "Fast and not loud smart looking laptop",
  },
  {
    id: "pt",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        {/* <ProductItem 
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
      </ul>
    </section>
  );
};

export default Products;
