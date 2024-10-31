import { FaSearch } from "react-icons/fa";

export default function TopBar() {
    return (
        <>
            <div className="h-[50px]  flex w-full">
                <div className="bg-[#ff0000] w-[35%] flex justify-center items-center space-x-10 text-[14px] font-700 text-white">
                    <p>Call Us: <a>+923446540444</a></p>
                    <a href="/pages/AboutUs">About Us</a>
                    <a href="/pages/AboutUs">Contacts</a>
                </div>
                <div className="bg-white w-[30%] p-2">
                    <div className="flex items-center bg-white rounded-full border w-full">
                        <input
                            type="text"
                            placeholder="Search Spare Parts"
                            className="h-[35px] w-full rounded-l-full px-4 text-gray-700 focus:outline-none"
                        />
                        <button className="h-[35px] w-16 bg-red-400 rounded-r-full flex items-center justify-center">
                            <FaSearch className="text-white" />
                        </button>
                    </div>
                </div>

                <div className="bg-black  w-[35%] flex justify-center items-center">
                    <div className="flex text-[14px] text-white justify-center items-center space-x-8">
                        <button>Get a Quote: <span>5</span></button>
                        <button>Language: Eng</button>
                    </div>
                </div>
            </div>
        </>
    )
}