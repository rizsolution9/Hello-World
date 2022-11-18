import axios from "axios";

const base_url =
  "https://217c8361-a838-4ff6-83cd-9c97c052ee80.mock.pstmn.io/customers";

export const Customers = () => {
  const response = axios.get(base_url);
  return response;
};

export const CustomersById = (id) => {
  let url = base_url + id;
  return axios.get(url);
};

export const create = (customers) => {
  return axios.post(base_url, customers);
};

export const update = (Id, data) => {
  return axios.put(`base_url ${Id}`, data);
};

export const remove = (Id) => {
  return axios.delete(`base_url${Id}`);
};
