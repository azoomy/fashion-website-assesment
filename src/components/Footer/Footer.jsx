import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <div className={styles.mainFooter}>
          <div className={styles.logoName}>LogoIpsum</div>
          <div className={styles.details}>
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </div>
        </div>
        <div className={styles.bottom}>Developed by Mohammed Abdul Azeem</div>
      </div>
      <div className={styles.socials}>
        <div className={styles.title}>Our Social Media</div>
        <div className={styles.item}>Facebook</div>
        <div className={styles.item}>Instagram</div>
        <div className={styles.item}>Twitter</div>
        <div className={styles.item}>Youtube</div>
      </div>
      <div className={styles.contact}>
        <div className={styles.title}>Contact</div>
        <div className={styles.item}>azeem12mohammed@gmail.com</div>
        <div className={styles.item}>Al Raffa Street, Bur Dubai</div>
        <div className={styles.item}>+971 504 267 827</div>
      </div>
    </div>
  );
};
