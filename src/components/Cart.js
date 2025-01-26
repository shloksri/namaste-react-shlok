import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const store = useSelector((store) => store);
  const cartItems = store.cart.items;
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="p-2 m-2 text-white bg-black rounded-lg">
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h3>Your cart is empty. Please add items to the cart.</h3>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
