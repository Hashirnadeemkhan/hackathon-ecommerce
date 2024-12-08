import React from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import whiteswift from "/public/whiteswift.png";
import blackswift from "/public/blackswift.png";
import blueswift from "/public/blueswift.png";
import darkblueswift from "/public/darkblueswift.png";
import brownswift from "/public/brownswift.png";
import rollsroyce from "/public/rollsroyce.png";
import greyswift from "/public/greyswift.png";
import heroGray from "/public/heroGray.png";
import view from "/public/view.png";
import bluemercedes from "/public/bluemercedes.png";
import interior from "/public/interior.png";
import seats from "/public/seats.png";
import profilePic from "/public/Profile.png";
import profill from "/public/Profill.png";
import Link from "next/link";

const CarRentalComponent = () => {
    const cars = [
        {
          image: whiteswift, // Replace with your actual image URLs
          name: "Koenigsegg",
          type: "Sport",
          specs: { fuel: 90, transmission: "Manual", capacity: 2 },
          price: 99,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: heroGray ,
          name: "Nissan GT-R",
          type: "Sport",
          specs: { fuel: 80, transmission: "Manual", capacity: 2 },
          price: 80,
          oldPrice: 100,
          isFavorite: false,
        },
        {
          image: rollsroyce,
          name: "Rolls-Royce",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: heroGray ,
          name: "All New Rush",
          type: "Sport",
          specs: { fuel: 80, transmission: "Manual", capacity: 2 },
          price: 80,
          oldPrice: 100,
          isFavorite: false,
        },
        {
          image: greyswift ,
          name: "Nissan GT-R",
          type: "Sport",
          specs: { fuel: 80, transmission: "Manual", capacity: 2 },
          price: 80,
          oldPrice: 100,
          isFavorite: false,
        },
        {
          image: brownswift,
          name: "CR  - V",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: darkblueswift,
          name: "All New Terios",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: blackswift,
          name: "CR  - V",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
        {
          image: blueswift,
          name: "MG ZX Exclusice",
          type: "Sedan",
          specs: { fuel: 70, transmission: "Manual", capacity: 4 },
          price: 96,
          oldPrice: null,
          isFavorite: true,
        },
    ]

    const reviews = [
        {
          name: "Alex Stanton",
          role: "CEO at Bukalapak",
          date: "21 July 2022",
          rating: 4,
          profilePic: profilePic,
          review:
            "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
        {
          name: "Skylar Dias",
          role: "CEO at Amazon",
          date: "20 July 2022",
          rating: 4,
          profilePic: profill,
          review:
            "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        },
      ];
    
    

  return (
    <div className="p-6 bg-gray-100">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-screen-xl mx-auto">
        {/* Filters Section */}
        <aside className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Type</h2>
          <ul className="space-y-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span>{type}</span>
                </label>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">Capacity</h2>
          <ul className="space-y-2">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span>{capacity}</span>
                </label>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">Price</h2>
          <input type="range" className="w-full" max="100" />
          <p className="text-sm text-gray-600 mt-2">Max: $100.00</p>
        </aside>

        {/* Car Details Section */}
        <div className="flex-1 space-y-6">
          {/* Upper Section */}
          <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md">
            {/* Left Side - Car Images */}
            <div className="lg:w-1/2 p-4">
              <Image src={view} alt="Car" className="w-full rounded-md mb-4" />
              <div className="flex space-x-2">
                <Image src={bluemercedes} alt="Thumbnail" className="w-1/3 rounded-md" />
                <Image src={interior} alt="Thumbnail" className="w-1/3 rounded-md" />
                <Image src={seats} alt="Thumbnail" className="w-1/3 rounded-md" />
              </div>
            </div>

            {/* Right Side - Car Details */}
            <div className="lg:w-1/2 p-6">
              <h3 className="text-2xl font-bold">Nissan GT – R</h3>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                <span className="ml-2 text-gray-500 text-sm">440+ Reviews</span>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired
                by the most unforgiving proving ground, the "race track".
              </p>
              <div className="grid grid-cols-2 gap-4 text-lg mb-6">
                <p>
                  <strong>Type Car:</strong> Sport
                </p>
                <p>
                  <strong>Capacity:</strong> 2 Person
                </p>
                <p>
                  <strong>Steering:</strong> Manual
                </p>
                <p>
                  <strong>Gasoline:</strong> 70L
                </p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0">
                  $80.00<span className="text-gray-500 line-through ml-2">$100.00</span>/day
                </div>
                <Link href={"/billing"}>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
                  Rent Now
                </button>
                </Link>
              </div>
            </div>
          </div>

          {reviews.map((review, index) => (
  <div
    key={index}
    className="flex space-x-4 border-b border-gray-200 pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
  >
    <Image
      src={review.profilePic}
      alt={`${review.name} Profile`} // Fix: Properly wrap in template literals with curly braces
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
          <span
            key={i}
            className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  </div>
))}


            <div className="flex justify-center mt-4">
              <button className="text-gray-500 text-sm hover:underline flex items-center justify-center">
                Show All <span className="ml-1">&#x25BC;</span>
              </button>
            </div>

          {/* Products Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Available Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car, index) => (
                <ProductCard
                  key={index}
                  image={car.image}
                  name={car.name}
                  type={car.type}
                  specs={car.specs}
                  price={car.price}
                  oldPrice={car.oldPrice}
                  isFavorite={car.isFavorite}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalComponent;