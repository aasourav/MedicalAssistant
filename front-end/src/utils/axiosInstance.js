import axios from "axios";
axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: `medicalassistantlive-production.up.railway.app`,
  withCredentials: true,
});
export default axiosInstance;
