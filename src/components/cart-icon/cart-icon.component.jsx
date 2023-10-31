import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectCartIsOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectCartIsOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
