import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions.js";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function Cart(props) {
  const { id } = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);
  return <>CART</>;
}

export default Cart;
