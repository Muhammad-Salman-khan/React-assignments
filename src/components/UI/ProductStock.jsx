import { useState, useEffect } from "react";
import ProductsWithStock from "../ProductsWithStock.jsx";

const ProductStock = () => {
  const [product, setProduct] = useState({});
  const FetchProduct = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts/product/random"
      );
      if (!res.ok) throw new Error("faild to fetch data");
      const data = await res.json();
      setProduct(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    FetchProduct();
  }, []);
  console.log(product);

  return (
    <>
      <div className="flex justify-center align-middle items-center h-screen">
        <ProductsWithStock Product={product} />
      </div>
    </>
  );
};

export default ProductStock;
