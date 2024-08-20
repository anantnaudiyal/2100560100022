import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api-url';

export const fetchProducts = async (filters, sort, page) => {
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { ...filters, sort, page },
  });
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
