import { FaSearch, FaCarSide } from "react-icons/fa";

export default function HeroSection(){
    return(
        <>
        <div className="h-[108vh] bg-[url('/herosection/herosection.jpeg')] bg-contain text-center text-white py-20">
     
   
      <h2 className="text-lg font-light mb-2">Find auto parts for every car</h2>
      <h1 className="text-5xl font-bold mb-6">Find Perfect Parts</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 text-lg font-semibold mb-6">
        <button className="text-white border-b-2 border-white pb-1">All</button>
        <button className="text-gray-300 hover:text-white pb-1">New</button>
        <button className="text-gray-300 hover:text-white pb-1">Used</button>
      </div>

      {/* Search Filters */}
      <div className="flex justify-center items-center">
      <div className="flex justify-center items-center space-x-4 bg-white  rounded-lg mx-auto shadow-lg mb-6">
      <div className="py-4 px-6 flex items-center space-x-4">
    <select className="text-gray-700 bg-transparent outline-none py-2 px-4">
      <option>Search</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>

    {/* Divider */}
    <div className="h-10 border-l border-gray-800"></div>

    <select className="text-gray-700 bg-transparent outline-none py-2 px-4">
      <option>Any Makes</option>
      <option>Toyota</option>
      <option>Honda</option>
    </select>

    {/* Divider */}
    <div className="h-10 border-l border-gray-800"></div>

    <select className="text-gray-700 bg-transparent outline-none py-2 px-4">
      <option>Any Models</option>
      <option>Corolla</option>
      <option>Civic</option>
    </select>

    {/* Divider */}
    <div className="h-10 border-l border-gray-800"></div>

    <select className="text-gray-700 bg-transparent outline-none py-2 px-4">
      <option>Years</option>
      <option>2020</option>
      <option>2021</option>
    </select>
  </div>
        <div>
        <button className="flex items-center bg-red-500 text-white py-6 px-6   rounded-lg font-semibold">
          <FaSearch className="mr-2" /> Search Parts
        </button>
        </div>
     
      </div>
      </div>
      {/* Browse Options */}
      <p className="text-white mb-4">Or Browse Spare parts</p>
      <div className="flex justify-center flex-wrap gap-4">
        <button className="flex items-center bg-white text-gray-700 py-2 px-4 rounded-full shadow">
          <FaCarSide className="mr-2" /> suv
        </button>
        <button className="flex items-center bg-white text-gray-700 py-2 px-4 rounded-full shadow">
          <FaCarSide className="mr-2" /> Honda
        </button>
        <button className="flex items-center bg-white text-gray-700 py-2 px-4 rounded-full shadow">
          <FaCarSide className="mr-2" /> Hyundai
        </button>
        <button className="flex items-center bg-white text-gray-700 py-2 px-4 rounded-full shadow">
          <FaCarSide className="mr-2" /> Audi
        </button>
        <button className="flex items-center bg-white text-gray-700 py-2 px-4 rounded-full shadow">
          <FaCarSide className="mr-2" /> Kia
        </button>
      </div>
    </div>

        </>
    )
}