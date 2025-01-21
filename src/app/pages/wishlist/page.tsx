"use client"

import type React from "react"

import { useWishlist } from "@/components/contexts/WishListsContext"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"

const WishlistPage: React.FC = () => {
  const { wishlist } = useWishlist()

  return (
    <div className="p-4 lg:px-20">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <ProductCard
              key={item._id}
              {...item}
              fuelCapacity=""
              transmission=""
              seatingCapacity=""
              originalPrice={null}
              tags={[]}
              pricePerDay={item.pricePerDay.toString()} // Convert number to string
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default WishlistPage