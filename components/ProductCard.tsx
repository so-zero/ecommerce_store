"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: ProductType }) => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      setSignedInUser(data);
      setLike(data.wishlist.includes(product._id));
      setLoading(false);
    } catch (error) {
      console.log("users_GET", error);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        setLoading(true);
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updatedUser = await res.json();
        setSignedInUser(updatedUser);
        setLike(updatedUser.wishlist.includes(product._id));
        setLoading(false);
      }
    } catch (error) {
      console.log("wishlist_POST", error);
    }
  };

  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[320px] flex flex-col gap-2 mx-auto"
    >
      <Image
        src={product.media[0]}
        alt={product.title}
        width={320}
        height={300}
        className="h-[250px] rounded-sm cursor-pointer"
      />
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{product.title}</p>
        <p className="text-sm text-gray-400">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">{product.price}</p>
        <button onClick={handleLike}>
          {like ? <IoHeart className="text-red-500" /> : <IoHeartOutline />}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
