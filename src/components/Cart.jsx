import { useContext } from "react";
import Modal from "./UI/Modal.";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }
  function handleCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items?.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart}>Close</Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
