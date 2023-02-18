import React, { useEffect, useState } from "react";
import { getCategories, getProductByCategories } from "../../api/products";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Shop.module.css";
export const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
    console.log(products);
  }, [products]);
  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      console.log(res);
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategoryChange = async (category) => {
    try {
      setLoading(true);
      const res = await getProductByCategories(category);
      console.log(res);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      {/* Shop Hero Content */}
      <div className={styles.mainHero}>
        <div className={styles.textContent}>
          <div className={styles.textSecondary}>Home {">"} Shop</div>
          <div className={styles.textMain}>Shop</div>
        </div>
        <div className={styles.sliderPhotos}>
          <div className={styles.photos}></div>
        </div>
      </div>
      {/* Product Tabs */}
      <div className={styles.mainTabs}>
        {categories.map((category, i) => (
          <div
            onClick={() => {
              handleCategoryChange(category);
            }}
            key={i}
            className={
              products[0]?.category === category
                ? styles.selectedTab
                : styles.tab
            }
          >
            {category}
          </div>
        ))}
        <div className={styles.tab}>More</div>
      </div>
      {products.length === 0 ? (
        <p className={styles.chooseCategory}>Please choose a cateogry</p>
      ) : (
        <div className={styles.products}>
          {products.map((product, i) => (
            <div key={i} className={styles.gridItem}>
              {loading ? (
                "Please wait while products are loaded..."
              ) : (
                <>
                  <div className={styles.product}>
                    <img src={product.image} alt="img" />
                  </div>
                  <div className={styles.displayText}>
                    <div className={styles.displayCategory}>
                      {product.category}
                    </div>
                    <div className={styles.displayTitle}>{product.title}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};
