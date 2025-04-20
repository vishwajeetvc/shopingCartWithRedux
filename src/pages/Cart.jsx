import { useSelector } from "react-redux";
import { selectCartItems } from "../store/slices/cartSlice";
import CartItem from "../components/CartItems";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="max-w-[900px] flex flex-col gap-5 m-auto p-4">
      <h1 className="text-4xl font-bold">Sofez-Cart</h1>
      {cartItems.map((item) => (
        <CartItem product={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cart;
