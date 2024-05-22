'use client'
import { useAppSelector } from '@/lib/store/hooks';
import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const AddToCartButton = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="relative">
      <Link href={"/cart"} className="hover:text-primary">
        <ShoppingBasket />
      </Link>
      <span
        className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center 
            rounded-full bg-orange-600 font-bold text-white"
      >
        {items.length}
      </span>
    </div>
  );
}

export default AddToCartButton
