import React from "react";

// enum Category {
//   Technology = "Technology",
//   Fashion = "Fashion",
//   Sports = "Sports",
//   Food = "Food"
// }

interface ProductProps {
  product: {
    title: string;
    description: string;
    price: number;
    discount: string;
    category: string;
    image?: string;
  };
}

export default function Product({ product }: ProductProps) {
  // console.log("in product", product);

  return (
    <>
      <div>{product.title}</div>
      <div>{product.description}</div>
    </>
  );
}
