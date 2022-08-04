import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
} from "../constants/productConstants.js";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await axios.get("http://localhost:8080/api/products");
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
