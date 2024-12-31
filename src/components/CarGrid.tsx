import React from "react";
import Link from "next/link";
import heroWhite from "/public/heroWhite.png"

import whiteswift from "/public/whiteswift.png"
import blackswift from "/public/blackswift.png"
import blueswift from "/public/blueswift.png"
import darkblueswift from "/public/darkblueswift.png"
import brownswift from "/public/brownswift.png"
import rollsroyce from "/public/rollsroyce.png"
import greyswift from "/public/greyswift.png"
import heroGray from "/public/heroGray.png"
import brightwhite from "/public/brightwhite.png"
import ProductCard from "@/components/ProductCard"; // Assuming your ProductCard component is in the same directory
// Car Data Array
const cars = [
    {
      image: heroWhite, // Replace with your actual image URLs
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
    {
      image:brightwhite,
      name: "New MG ZS",
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
    
    {
      image: whiteswift,
      name: "New MG ZS",
      type: "Sedan",
      specs: { fuel: 70, transmission: "Manual", capacity: 4 },
      price: 96,
      oldPrice: null,
      isFavorite: true,
    },
  ];

const CarGrid: React.FC = () => {
  return (
    <div className="p-4 lg:px-20">
      <div className="flex justify-between">
      <h2 className="text-xl font-semibold mb-4">Popular Cars</h2>
      <h2 className="text-xl font-semibold mb-4 hover:underline">View All</h2>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="flex justify-center items-center mt-16 relative mb-10">
   <Link href={"/pages/categories"}><button className="bg-[#3563E9] hover:bg-blue-700 tracking-widest px-5  p-2 rounded-lg text-white lg:text-lg text-sm">Showmorecar</button></Link> 
    <span className="absolute right-0 text-gray-500 text-lg">120 Car</span>
      </div>
    </div>
  );
};

export default CarGrid;
