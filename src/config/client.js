import axios from "axios";

export const client = axios.create({
  baseURL: 'https://covid-api.mmediagroup.fr/v1',
  timeout: 3000,
})