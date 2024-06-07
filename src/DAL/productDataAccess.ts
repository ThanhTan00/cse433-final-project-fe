import axios from "axios";

async function getAllProducts() {
    const response = await axios.get("http://localhost:8080/products");
    return response.data;
}

export {getAllProducts}