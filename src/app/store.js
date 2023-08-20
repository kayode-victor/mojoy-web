import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import blogReducer from "../features/blog/blogSlice";
import contactReducer from "../features/contact/contactSlice";
import pcategoryReducer from "../features/pcategory/pcategorySlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
    pcategory: pcategoryReducer,
  },
});
