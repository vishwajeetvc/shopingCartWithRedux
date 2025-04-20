import { useDispatch } from "react-redux";
import {
  decQtyInCart,
  incQtyInCart,
  removeFromCart,
} from "../store/slices/cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, price, description, category, image, quantity } = product;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-6 border border-gray-300 rounded-xl shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full md:w-[180px] object-contain max-h-[200px] rounded-md"
      />
      <div className="flex flex-col gap-2 flex-grow">
        <h2 className="text-lg font-semibold text-center md:text-left">
          {title}
        </h2>
        <p className="text-sm text-gray-600 text-center md:text-left">
          {description}
        </p>
        <p className="text-sm text-blue-500 capitalize text-center md:text-left">
          {category}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-md font-bold">${price}</span>
          <span className="text-sm text-gray-700">Qty: {quantity}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-3">
          <button
            onClick={() => dispatch(incQtyInCart({ productId: id }))}
            className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            Add More
          </button>
          <button
            onClick={() => dispatch(removeFromCart({ productId: id }))}
            className="bg-red-400 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            Remove
          </button>
          <button
            onClick={() => dispatch(decQtyInCart({ productId: id }))}
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            Decrease Qty
          </button>
        </div>
      </div>
    </div>
  );
};

//const CartItem = ({ product }) => {
//  const dispatch = useDispatch();
//  const { id, title, price, description, category, image, quantity } = product;
//
//  return (
//    <div className="flex items-center gap-4 px-8 py-4 border border-gray-300 rounded-xl shadow-md">
//      <img src={image} alt={title} className=" w-[200px]" />
//      <div className="flex flex-col gap-1 flex-grow">
//        <h2 className="text-lg font-semibold">{title}</h2>
//        <p className="text-sm text-gray-600">{description}</p>
//        <p className="text-sm text-blue-500 capitalize">{category}</p>
//        <div className="flex items-center justify-between mt-2">
//          <span className="text-md font-bold">${price}</span>
//          <span className="text-sm text-gray-700">Qty: {quantity}</span>
//        </div>
//        <div className="flex items-center justify-between mt-2">
//          <button
//            onClick={() => {
//              dispatch(incQtyInCart({ productId: product.id }));
//            }}
//            className="border px-4 py-1 rounded-lg bg-amber-100"
//          >
//            Add More
//          </button>
//          <button
//            onClick={() => {
//              dispatch(removeFromCart({ productId: product.id }));
//            }}
//            className="border px-4 py-1 rounded-lg bg-amber-100"
//          >
//            Remove
//          </button>
//          <button
//            onClick={() => {
//              dispatch(decQtyInCart({ productId: product.id }));
//            }}
//            className="border px-4 py-1 rounded-lg bg-amber-100"
//          >
//            Decrease Qty
//          </button>
//        </div>
//      </div>
//    </div>
//  );
//};

export default CartItem;
