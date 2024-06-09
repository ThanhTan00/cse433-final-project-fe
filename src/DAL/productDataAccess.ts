import axios from "axios";
import { newProductData, productData, updateProductData } from "../BLL/type";

async function getAllProducts() {
    const response = await axios.get(`http://localhost:8080/api/products`);
    return response.data;
}

async function getProductById(id:any) {
    const response = await axios.get(`http://localhost:8080/api/products/${id}`);
    return response.data;
}

async function addProduct(newProduct: newProductData) {
    const response = await axios.post('http://localhost:8080/api/products', newProduct ,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    return response.data;
}

async function updateProduct(updateProduct: updateProductData) {
  const response = await axios.put('http://localhost:8080/api/products', updateProduct)
  return response.data;
}

export {getAllProducts, getProductById, addProduct, updateProduct}