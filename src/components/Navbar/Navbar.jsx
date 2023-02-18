import React from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.firstContainerCall}>+971 506 267 827</div>
        <div className={styles.firstContainerLogo}>logoipsum</div>
        <div className={styles.firstContainerSocials}>
          <div className={styles.socialIcon}>Fb</div>
          <div className={styles.socialIcon}>Tw</div>
          <div className={styles.socialIcon}>Ig</div>
          <div className={styles.socialIcon}>Yt</div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.navItems}>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={styles.navItem}
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/shop");
            }}
            className={styles.navItem}
          >
            Shop
          </div>
          <div
            onClick={() => {
              navigate("/faq");
            }}
            className={styles.navItem}
          >
            Faq
          </div>
          <div
            onClick={() => {
              navigate("/blog");
            }}
            className={styles.navItem}
          >
            Blog
          </div>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.actionButton}>
            <AiOutlineHeart />
          </div>
          <div className={styles.actionButton}>
            <AiOutlineShoppingCart />
          </div>
          <div className={styles.actionButton}>
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </div>
  );
};
