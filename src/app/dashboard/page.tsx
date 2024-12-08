import Link from "next/link";
import maps from "/public/Maps.png"
import Image from "next/image";
import bluemercedes from "/public/bluemercedes.png";
import PickUpSection from "@/components/LocationComponent";
export default function Dashboard() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-row">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md flex flex-col p-6">
          <div className="text-xs text-gray-400 mb-8">M A I N  M E N U</div>
          <nav className="space-y-4">
            <Link href="#" className="flex items-center space-x-2 rounded-lg p-3 text-white bg-blue-500 ">
              <span>Dashboard</span>
            </Link>
            <Link href="#" className="flex items-center text-gray-700">
              <span className="mt-4">Car Rent</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700">
              <span className="mt-4">Insight</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700">
              <span className="mt-4">Reimburse</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700">
              <span className="mt-4">Inbox</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700">
              <span className="mt-4">Calendar</span>
            </Link>
      

          </nav>
          <div className="mt-auto space-y-4 flex flex-col gap-y-5">
          <span className="text-gray-400 text-xs">P R E F E R E N C E S</span>
          <span>Setting</span>
          <span>Help & Center</span>
            <div className="flex  items-center space-x-2">
              <span>Dark Mode</span>
              <button className="bg-gray-200 p-2 rounded-full">🌙</button>
            </div>
            <button className="text-red-500">Log Out</button>
          </div>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header Section */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7 bg-white shadow-lg p-6 rounded-lg">
              <div className="font-bold text-xl mb-4">Details Rental</div>
              {/* Map and Details */}
              <div className="flex flex-col">
                <Image src={maps} alt="map"></Image>
                <div className="flex items-center space-x-4 mt-5">
            <Image src={bluemercedes} alt="Car" className=" rounded-lg" />
            <div>
              <h3 className="text-gray-800 lg:text-3xl text-xl font-bold">Nissan GT - R</h3>
              <p className="text-sm text-gray-500">440+ Reviewer</p>
            </div>
          </div>
                </div>

                <PickUpSection/>
                <PickUpSection/>
              <div className="font-bold mt-4 text-lg">Total Rental Price: $80.00</div>
            </div>
  
            <div className="col-span-5">
              {/* Top Rentals */}
              <div className="bg-white shadow-lg p-6 rounded-lg mb-4">
                <div className="font-bold text-lg">Top 5 Car Rental</div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sport Car</span>
                    <span className="text-sm font-medium">17,439</span>
                  </div>
                  {/* Additional data */}
                </div>
              </div>
  
              {/* Recent Transactions */}
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <div className="font-bold text-lg">Recent Transactions</div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Nissan GT - R</span>
                    <span className="text-sm font-medium">$80.00</span>
                  </div>
                  {/* Additional transactions */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  