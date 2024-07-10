import { getProducts } from "@/lib/actions";
import ProductCard from "./ProductCard";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="font-bold text-xl">BORCELLE에서만 만나요</p>
      <div className="flex flex-wrap mx-auto gap-16">
        {products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
