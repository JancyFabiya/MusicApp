import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.api.goongoonalo.com/v1",
  withCredentials: true,
  timeout: 30000,
});

export default instance;