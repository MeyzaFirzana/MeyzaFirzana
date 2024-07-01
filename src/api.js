// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend URL

export const addFoodItem = async (foodId, foodDetails, expirationTime) => {
  try {
    const response = await axios.post(`${BASE_URL}/foodItems`, {
      foodId,
      foodDetails,
      expirationTime
    });
    return response.data; // Assuming your backend returns the newly added food item
  } catch (error) {
    throw error.response.data.error; // Adjust error handling based on your backend's response structure
  }
};

export const getFoodItem = async (foodId) => {
  try {
    const response = await axios.get(`${BASE_URL}/foodItems/${foodId}`);
    return response.data; // Assuming your backend returns the food item details
  } catch (error) {
    throw error.response.data.error; // Adjust error handling based on your backend's response structure
  }
};

export const exportFoodItem = async (foodId) => {
  try {
    const response = await axios.put(`${BASE_URL}/foodItems/${foodId}/export`);
    return response.data; // Assuming your backend returns the updated food item
  } catch (error) {
    throw error.response.data.error; // Adjust error handling based on your backend's response structure
  }
};

export const loadAllFoodItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/foodItems`);
    return response.data; // Assuming your backend returns an array of all food items
  } catch (error) {
    throw error.response.data.error; // Adjust error handling based on your backend's response structure
  }
};

export const grantFarmerRole = async (address) => {
  try {
    const response = await axios.post(`${BASE_URL}/grantFarmerRole`, {
      address
    });
    return response.data; // Assuming your backend returns success message or updated user roles
  } catch (error) {
    throw error.response.data.error; // Adjust error handling based on your backend's response structure
  }
};

export const grantDistributorRole = async (address) => {
  try {
    const response = await axios.post(`${BASE_URL}/grantDistributorRole`, {
      address
    });
    return response.data; // Assuming your backend returns success message or updated user roles
  } catch (error) {
    throw error.response.data.error; // Adjust error handling based on your backend's response structure
  }
};
