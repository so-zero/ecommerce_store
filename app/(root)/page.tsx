import Image from "next/image";
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen object-cover"
      />
      <Banner />
      <ProductList />
    </>
  );
}
