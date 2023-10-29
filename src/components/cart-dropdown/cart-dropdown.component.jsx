import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.content";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  EmpetyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmpetyMessage>Your cart is empty</EmpetyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
