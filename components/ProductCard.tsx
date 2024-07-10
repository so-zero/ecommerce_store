import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[250px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt={product.title}
        width={250}
        height={300}
        className="h-[250px] rounded-sm cursor-pointer"
      />
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{product.title}</p>
        <p className="text-sm text-gray-400">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">{product.price}</p>
        <button>
          <IoHeartOutline />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
