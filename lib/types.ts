type BannerType = {
  _id: string;
  title: string;
  products: number;
  image: string;
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  banners: [string];
  tags: [string];
  sizes: [string];
  colors: [string];
  price: number;
};

type UserType = {
  clerkId: string;
  wishlist: [string];
  orders: [string];
};
