import React from "react";
import Product from "../Product.jsx";
import { useState, useEffect } from "react";
const ProductCard = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const FetchedProduct = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("faild to fetch");
      const data = await res.json();
      setLoading(false);
      return setProduct(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    FetchedProduct();
  }, []);
  if (loading) {
    return (
      <div className="text-center p-6">
        <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-[#0b0904] mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I'm getting your joke
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center p-6">
        <h2 className="text-zinc-900 dark:text-white mt-4">{error}</h2>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-center m-4 dark:text-white text-black text-4xl">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Product products={product} />
      </div>
    </>
  );
};

export default ProductCard;
