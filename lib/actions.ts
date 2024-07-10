export const getBanners = async () => {
  const banners = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`);
  return await banners.json();
};

export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return await products.json();
};
