import { Link } from "react-router";
import { Heart, ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductData } from "../store/slices/productSlice";
import {
  cartItemsLength,
  getAllCartItemsData,
} from "../store/slices/cartSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const cartLength = useSelector(cartItemsLength);
  useEffect(() => {
    dispatch(getAllProductData());
    dispatch(getAllCartItemsData());
  }, []);
  return (
    <header className="flex sticky top-0 items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link to="/">
        <div className="text-2xl font-bold text-blue-600">Shop</div>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/cart">
          <button className="flex items-center cursor-pointer gap-1 text-gray-700 hover:text-blue-600">
            <ShoppingCart className="w-5 h-5" fill="red" />
            <span className="font-bold">Cart</span>
            {cartLength > 0 && (
              <span className=" bg-orange-500 text-white font-bold p-2 rounded-full w-5 h-5 text-sm flex justify-center items-center ">
                {cartLength}
              </span>
            )}
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
