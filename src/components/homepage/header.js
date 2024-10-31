import { useState } from "react";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";

const Header = () => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isModelsOpen, setModelsOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  const toggleModelsDropdown = () => {
    setModelsOpen(!isModelsOpen);
  };

  return (
    <header className="flex h-[75px] items-center justify-between px-8 py-4 bg-white border-b">
      {/* Left Section: Category Button */}
      <div className="w-[40%] flex space-x-4">
      <button
          onClick={toggleCategoryDropdown}
          className="flex items-center bg-[#ff0000] text-[15px] text-white px-1 py-1"
        >
          <FaBars className="mr-2" />
          Category
        </button>
        {isCategoryOpen && (
          <div className="absolute top-full mt-2 bg-white border rounded shadow-lg z-10">
            <ul className="p-2">
              <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Toyota</li>
              <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Mercedes</li>
              <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Chevrolet</li>
            </ul>
          </div>
        )}
        <nav className="flex items-center space-x-8 text-[15px]">
        <a href="#" className="text-gray-700 hover:text-[#ff0000]">Home</a>
        <div className="relative">
          <button
            onClick={toggleModelsDropdown}
            className="text-gray-700 hover:text-[#ff0000]"
          >
            Models
          </button>
          {isModelsOpen && (
            <div className="absolute top-full mt-2 bg-white border rounded shadow-lg z-10">
              <ul className="p-2">
                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Model 1</li>
                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Model 2</li>
              </ul>
            </div>
          )}
        </div>
        <a href="#" className="text-gray-700 hover:text-[#ff0000]">About Us</a>
        <a href="#" className="text-gray-700 hover:text-[#ff0000]">FAQ's</a>
        <a href="#" className="text-gray-700 hover:text-[#ff0000]">Contact Us</a>
      </nav>

      </div>
      <div className="w-[30%] flex justify-center">
      <h1 className="text-[40px] font-bold font-sans text-[#ff0000]">Auto <span className="text-black">Spare </span>Parts</h1>

      </div>
      <div className="flex items-center justify-end space-x-10 w-[40%]">
        <div className="flex items-center text-gray-700">
          <MdOutlineShoppingCart className="mr-2 w-[45px] h-[39px] " />
          <div className="flex flex-col">
          <span className="text-[15px]">Shopping Cart</span>
          <span className=" font-bold text-black text-[20px]">Rs. 21,000</span>
          </div>
        </div>
        <button className="flex items-center text-gray-700">
          <FaUser className="mr-2" />
          Signup
        </button>
        <button className="bg-[#ff0000] text-white px-4 py-2 rounded-md">Login</button>
      </div>
    </header>
  );
};

export default Header;
