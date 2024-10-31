import { FaArrowRight } from "react-icons/fa";

export default function ServiceSection2(){
    return(
        <>
        <div className="w-full h-[500px] grid grid-cols-2 px-12">
            <div>
                <img src="/images/newsection.jpeg" className="w-full h-full object-cover"></img>
            </div>
            <div className="bg-[#646464] p-10 text-white">
    <div>
        <h1 className="text-3xl font-bold text-white mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h1>
        <p className="text-sm mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        
        <ul className="mt-6 space-y-4">
            <li className="flex items-center">
                <span className="bg-white w-4 h-4 rounded-full mr-3"></span>
                We are the largest Spare Parts providers.
            </li>
            <li className="flex items-center">
                <span className="bg-white w-4 h-4 rounded-full mr-3"></span>
                You get 24/7 roadside assistance
            </li>
            <li className="flex items-center">
                <span className="bg-white w-4 h-4 rounded-full mr-3"></span>
                We fix 4 out of 5 cars at the roadside
            </li>
        </ul>

        <button className="bg-red-500 text-white py-2 px-6 mt-8 rounded flex items-center space-x-2">
            Get Started
            <FaArrowRight className="transform -rotate-45 font-100 ml-2"/>
           
        </button>
    </div>
</div>

        </div>
        </>
    )
}