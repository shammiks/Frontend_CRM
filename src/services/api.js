import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

// Fetch all campaigns
export const fetchCampaigns = async () => {
  const res = await axios.get(`${API_BASE}/campaigns`, { withCredentials: true });
  return res.data;
};

// Create a new campaign
export const createCampaign = async (name, rule) => {
  const res = await axios.post(`${API_BASE}/campaigns`, null, {
    params: { name, rule },
    withCredentials: true
  });
  return res.data;
};

// Save a new customer
export const saveCustomer = async (customer) => {
  const res = await axios.post(`${API_BASE}/customers`, customer, { withCredentials: true });
  return res.data;
};

// Fetch all customers
export const getCustomers = async () => {
  const res = await axios.get(`${API_BASE}/customers`, { withCredentials: true });
  return res.data;
};
