import axios from "axios";

export const getProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// function getProducts(){

// }
