import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {products.map((item: any) => {
        console.log(item);
        return <Product key={item.id} product={item} />;
      })}
    </>
  );
}
