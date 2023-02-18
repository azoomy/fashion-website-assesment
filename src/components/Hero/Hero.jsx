import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainHero}>
      <div className={styles.textContent}>
        <div className={styles.textMain}>Sort Out Your Spring Look</div>
        <div className={styles.textSecondary}>
          We will help to develop every smallest thing into a big one for your
          company
        </div>
        <button
          onClick={() => {
            navigate("/shop");
          }}
          className={styles.shopButton}
        >
          Shop {">"}
        </button>
      </div>
      <div className={styles.sliderPhotos}>
        <div className={styles.photos}></div>
        <div className={styles.photos}></div>
        <div className={styles.photos}></div>
      </div>
    </div>
  );
};
