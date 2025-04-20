import { useDispatch } from "react-redux";
import { addInCart } from "../store/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-[350px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-200">
      <img
        className="w-full h-64 object-contain p-4"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-lg text-gray-800 mb-2">
          {product.title.split(" ").slice(0, 4).join(" ")}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-600 font-semibold">${product.price}</span>
          <span className="text-gray-400 text-sm">{product.category}</span>
        </div>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <span>★ {product.rating.rate}</span>
          <span className="text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>
        <div className="flex justify-between py-3">
          <button
            onClick={() => {
              dispatch(addInCart({ productId: product.id }));
            }}
            className="px-4 py-2 border active:bg-orange-400 active:text-white font-bold text-gray-600 cursor-pointer rounded-lg"
          >
            Add to Cart
          </button>
          <button className="px-4 py-2  rounded-lg cursor-pointer bg-orange-400 text-white font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
