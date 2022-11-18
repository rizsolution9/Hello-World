import axios from "axios";

const base_url =
  "https://217c8361-a838-4ff6-83cd-9c97c052ee80.mock.pstmn.io/organizations/";

export const Organizations = () => {
  const response = axios.get(base_url);
  return response;
};

export const OrganizationsById = (id) => {
  let url = base_url + id;
  return axios.get(url);
};

export const create = (organization) => {
  return axios.post(base_url, organization);
};

export const update = (Id, data) => {
  return axios.put(`base_url ${Id}`, data);
};

export const remove = (Id) => {
  return axios.delete(`base_url${Id}`);
};
