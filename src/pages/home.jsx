import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { selectProducts } from "../store/slices/productSlice";

export default function Home() {
  const products = useSelector(selectProducts);
  return (
    <div className=" flex flex-wrap gap-10 justify-center py-10">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
