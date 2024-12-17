import React from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero";
import Category from "./components/category";
import Music from "./music";
import Delivery from "./components/delivery";
import FlashSale from "./components/flash";
import Products from "./components/products";
import Explore from "./components/exploreproduct";
import Feature from "./components/feature";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlashSale />
      <Category />
      <Products/>
      <Music />
      <Explore/>
      <Feature/>
      <Delivery />
      <Footer/>
    </div>
  );
}
