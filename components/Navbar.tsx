"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { IoHome, IoHeart } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaTruck, FaUser } from "react-icons/fa6";

export default function Navbar() {
  const { user } = useUser();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="sticky top-0 z-10 py-2 px-6 md:py-4 md:px-10 lg:py-6 lg:px-16 flex justify-between items-center border bg-white">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={150} height={80} />
      </Link>
      <div className="flex gap-8 max-lg:hidden text-lg font-semibold">
        <div>
          <Link href="/" className="flex gap-1 items-center">
            <IoHome size={20} /> 홈
          </Link>
        </div>
        <div className="relative flex items-center">
          <Link href="/cart" className="flex gap-1 items-center">
            <RiShoppingBag4Fill size={20} /> 장바구니
          </Link>
          <span className="absolute -top-3 -right-3 w-5 h-5 bg-rose-200 rounded-full text-sm text-center">
            0
          </span>
        </div>
        <Link href="/" className="flex gap-1 items-center">
          <IoHeart size={20} /> 위시
        </Link>
        <Link href="/" className="flex gap-1 items-center">
          <FaTruck size={20} /> 주문내역
        </Link>
        {user ? (
          <UserButton />
        ) : (
          <Link href="/sign-in" className="flex gap-1 items-center">
            <FaUser size={20} /> 로그인
          </Link>
        )}
      </div>
      <div className="flex gap-4 items-center lg:hidden font-semibold">
        <div
          className="relative cursor-pointer "
          onClick={() => setOpenMenu(!openMenu)}
        >
          메뉴
        </div>
        <div className="flex gap-1 items-center">
          <Link href="/cart">장바구니</Link>
          <span className="text-sm">(0)</span>
        </div>
        {user ? <UserButton /> : <Link href="/sign-in">로그인</Link>}
      </div>
      {openMenu && (
        <div className="absolute top-16 right-32 md:top-20 md:right-36 flex flex-col gap-4 p-3 rounded-lg border bg-white font-semibold lg:hidden">
          <Link href="/">홈</Link>
          <Link href="/">위시</Link>
          <Link href="/">주문내역</Link>
        </div>
      )}
    </div>
  );
}
