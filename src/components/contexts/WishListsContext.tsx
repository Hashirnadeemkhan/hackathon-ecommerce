"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type WishlistItem = {
  _id: string
  name: string
  brand: string
  type: string
  pricePerDay: string
  image: string
}

type WishlistContextType = {
  wishlist: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist")
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist)
        // Ensure all items have valid pricePerDay as string
        const validatedWishlist = parsedWishlist.map((item: WishlistItem) => ({
          ...item,
          pricePerDay: typeof item.pricePerDay === "string" ? item.pricePerDay : "0",
        }))
        setWishlist(validatedWishlist)
      }
    } catch (error) {
      console.error("Error loading wishlist:", error)
      setWishlist([])
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
    } catch (error) {
      console.error("Error saving wishlist:", error)
    }
  }, [wishlist])

  const addToWishlist = (item: WishlistItem) => {
    if (!item.pricePerDay || isNaN(Number.parseFloat(item.pricePerDay))) {
      item.pricePerDay = "0" // Set default value if invalid
    }
    setWishlist((prev) => {
      if (!prev.some((existingItem) => existingItem._id === item._id)) {
        return [...prev, item]
      }
      return prev
    })
  }

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item._id !== id))
  }

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item._id === id)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

