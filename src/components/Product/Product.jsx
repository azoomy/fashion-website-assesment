import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { getProducts } from "../../api/products";

export const Product = () => {
  //States
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts();
    console.log(res);
    setProducts(res.data);
  };
  return (
    <div className={styles.main}>
      <div className={styles.productItem}>
        <div className={styles.productName}>Products</div>
        <div className={styles.productDetails}>
          Lorem Ipsum is a simply dummy text of the printing and typesetting
          industry.
        </div>
        <div>
          <button className={styles.button}>
            <AiOutlineArrowRight color="white" />
          </button>
        </div>
      </div>
      {products &&
        products.map((product, i) => (
          <div key={i} className={styles.productItem}>
            <img className={styles.img} src={product.image} alt="img " />
          </div>
        ))}
    </div>
  );
};
