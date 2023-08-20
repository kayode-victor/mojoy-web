import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category/`);

  return response.data;
};

const pcategoryService = {
  getProductCategories,
};
export default pcategoryService;
