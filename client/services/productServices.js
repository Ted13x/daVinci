import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // TODO Ersetzen Sie dies durch die URL Ihres API-Gateways


export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting product: ${error}`);
        return null;
    }
}

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error(`Error getting products: ${error}`);
    return null;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
  } catch (error) {
    console.error(`Error creating product: ${error}`);
    return null;
  }
};

export const updateProduct = async (product) => {
    try {
        const response = await axios.put(`${API_URL}/products/${product._id}`, product);
        return response.data;
    } catch (error) {
        console.error(`Error updating product: ${error}`);
        return null;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product: ${error}`);
        return null;
    }
};


