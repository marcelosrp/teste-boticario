import React from "react";
import Header from "../components/Header/";
import ProductsWrap from "../components/Products/";

// import { GlobalContext } from "../context/GlobalStorage";

const Home = () => {
  return (
    <main className="main-content">
      <Header />
      <ProductsWrap />
    </main>
  );
};

export default Home;
