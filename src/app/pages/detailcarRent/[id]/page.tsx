"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
import { Star } from "lucide-react"
import ProductCard from "@/components/ProductCard"

interface Car {
  _id: string
  name: string
  brand: string
  type: string
  fuelCapacity: string
  transmission: string
  seatingCapacity: string
  pricePerDay: string
  originalPrice: string | null
  image: string
  description?: string
}

const CarDetailPage = () => {
  const [car, setCar] = useState<Car | null>(null)
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const { id } = params

  const reviews = [
    {
      name: "Alex Stanton",
      role: "CEO at Bukalapak",
      date: "21 July 2022",
      rating: 4,
      profilePic: "/Profile.png",
      review:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      name: "Skylar Dias",
      role: "CEO at Amazon",
      date: "20 July 2022",
      rating: 4,
      profilePic: "/Profill.png",
      review:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current car details
        const carResult = await client.fetch(
          `*[_type == "cars" && _id == $id][0]{
          _id,
          name,
          brand,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          "image": image.asset->url,
          description
        }`,
          { id },
        )

        // Fetch other cars for the "Available Cars" section
        const carsResult = await client.fetch(
          `*[_type == "cars" && _id != $id]{
          _id,
          name,
          brand,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          tags,
          "image": image.asset->url
        }`,
          { id },
        )

        setCar(carResult)
        setCars(carsResult)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchData()
    }
  }, [id])

  if (loading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (!car) {
    return <div className="text-center py-10">Car not found</div>
  }

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md">
        <div className="lg:w-1/2 p-4">
          <div className="relative w-full h-[300px] mb-4">
            <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="rounded-md object-contain" />
          </div>
          <div className="flex space-x-2">
            <div className="relative w-1/3 h-24">
              <Image src={car.image || "/placeholder.svg"} alt="Thumbnail" fill className="rounded-md object-contain" />
            </div>
            <div className="relative w-1/3 h-24">
              <Image src="/interior.png" alt="Interior" fill className="rounded-md object-cover" />
            </div>
            <div className="relative w-1/3 h-24">
              <Image src="/seats.png" alt="Seats" fill className="rounded-md object-cover" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-6">
          <h3 className="text-2xl font-bold">{car.name}</h3>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <Star className="w-5 h-5" />
            </div>
            <span className="ml-2 text-gray-500 text-sm">440+ Reviews</span>
          </div>
          <p className="text-gray-600 text-lg mb-4">
            {car.description ||
              `${car.brand} has become the embodiment of outstanding performance, inspired by the most unforgiving proving ground, the race track.`}
          </p>
          <div className="grid grid-cols-2 gap-4 text-lg mb-6">
            <p>
              <strong>Type Car:</strong> {car.type}
            </p>
            <p>
              <strong>Capacity:</strong> {car.seatingCapacity}
            </p>
            <p>
              <strong>Steering:</strong> {car.transmission}
            </p>
            <p>
              <strong>Gasoline:</strong> {car.fuelCapacity}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
              ${car.pricePerDay}
              {car.originalPrice && <span className="text-gray-500 line-through ml-2">${car.originalPrice}</span>}
              <span className="text-gray-500 text-lg">/day</span>
            </div>
            <Link href="/pages/billing">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Rent Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex space-x-4 border-b border-gray-200 pb-4 mb-4 last:border-none last:pb-0 last:mb-0">
              <Image
                src={review.profilePic || "/placeholder.svg"}
                alt={`${review.name} Profile`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                  <div className="text-sm text-gray-400">{review.date}</div>
                </div>
                <p className="text-gray-600 text-sm my-2">{review.review}</p>
                <div className="flex space-x-1 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Reviews Button */}
      <div className="flex justify-center mt-4">
        <button className="text-gray-500 text-sm hover:underline flex items-center justify-center">
          Show All <span className="ml-1">▼</span>
        </button>
      </div>

      {/* Available Cars Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold mb-6">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.slice(0, 3).map((car) => (
            <ProductCard key={car._id} {...car} tags={car.tags || []} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarDetailPage

