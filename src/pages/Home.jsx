import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Product } from "../components/Product/Product";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </>
  );
};
