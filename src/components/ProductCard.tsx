import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

// Define the type for the specs property
type Specs = {
  fuel: number; // or string if it's not strictly numeric
  transmission: string;
  capacity: number; // or string if it represents text
};

// Define the type for the ProductCard props
type ProductCardProps = {
  image: string | StaticImageData; // A type used when the image is imported directly from a file
  name: string;
  type: string;
  specs: Specs;
  price: number;
  oldPrice?: number | null; // Optional property
  isFavorite: boolean;
  showFavoriteIcon?: boolean; // Optional with a default value
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  type,
  specs: { fuel, transmission, capacity },
  price,
  oldPrice,
  isFavorite,
  showFavoriteIcon = true,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      {/* Image Section */}
      <div className="relative">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
        <Image src={image} alt={name} className="rounded-t-lg" />
        {showFavoriteIcon && (
          <div className="absolute top-2 right-2">
            <div
              className={`w-5 h-5 ${
                isFavorite ? "text-red-500" : "text-gray-400"
              }`}
            >
              <CiHeart />
            </div>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-500">{type}</p>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <p>{fuel}L</p>
          <p>{transmission}</p>
          <p>{capacity} People</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold text-blue-600">${price}/day</p>
          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">${oldPrice}</p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Link href={"/pages/detailcarRent"}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Rent Now
            </button>
          </Link>
          <div className="text-blue-600 text-xl hover:text-blue-700 cursor-pointer">
              
          <Link href={"/pages/cart"}><FaShoppingCart size={30} /></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
