import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const postEnquiry = async (conctactData) => {
  const response = await axios.post(`${base_url}enquiry`, conctactData);
  if (response.data) {
    return response.data;
  }
};

export const contactService = {
  postEnquiry,
};
