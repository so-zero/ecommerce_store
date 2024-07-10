import Image from "next/image";
import Link from "next/link";
import { getBanners } from "@/lib/actions";

export default async function Banner() {
  const banners = await getBanners();

  return (
    <div className="flex flex-col items-center gap-10 py-16 px-5">
      <p className="font-bold text-xl">FOCUS ON : 이 주의 브랜드 이슈</p>
      <div className="flex items-center justify-center gap-6">
        {banners.map((banner: BannerType) => (
          <Link href={`/banners/${banners._id}`} key={banner._id}>
            <Image
              src={banner.image}
              alt={banner.title}
              width={350}
              height={200}
              className="rounded-sm cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
