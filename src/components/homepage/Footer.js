import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-black text-white py-12 px-8">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto ">
                {/* Brand Info */}
                <div className="grid grid-cols-2">
                <div className="">
                    <h1 className="text-2xl font-bold">Auto Parts</h1>
                    <p className="mt-2 text-gray-400">Receive pricing updates, shopping tips & more!</p>
                    {/* Email Signup */}
                   
                </div>
                <div className="mt-4 flex relative">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full h-16 bg-gray-800 text-white px-4 py-2 rounded-full outline-none"
                        />
                        <button className="absolute h-12 top-2 right-2 bg-red-500 w-32 px-4 py-2 rounded-full font-semibold">Sign Up</button>
                    </div>
                </div>
               

                {/* Navigation Links */}
                <div className="grid grid-cols-5 mt-16">

                <div>
                    <h2 className="text-lg font-semibold mb-2">Company</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Services</li>
                        <li>FAQs</li>
                        <li>Terms</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>Get in Touch</li>
                        <li>Help Center</li>
                        <li>Live Chat</li>
                        <li>How it Works</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Our Brands</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>Toyota</li>
                        <li>Porsche</li>
                        <li>Audi</li>
                        <li>BMW</li>
                        <li>Ford</li>
                        <li>Nissan</li>
                        <li>Peugeot</li>
                        <li>Volkswagen</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Vehicle Parts Type</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>Sedan</li>
                        <li>Hatchback</li>
                        <li>SUV</li>
                        <li>Hybrid</li>
                        <li>Electric</li>
                        <li>Coupe</li>
                        <li>Truck</li>
                        <li>Convertible</li>
                    </ul>
                </div>

                {/* App Download and Social Media */}
                <div className="col-span-1 md:col-span-1 space-y-4">
                    <h2 className="text-lg font-semibold mb-2">Our Mobile App</h2>
                    <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg mb-2">
                        <FaApple className="mr-2" /> Apple Store
                    </button>
                    <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg">
                        <FaGooglePlay className="mr-2" /> Google Play
                    </button>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Connect With Us</h2>
                        <div className="flex space-x-4 mt-2">
                            <FaFacebookF className="text-xl hover:text-gray-400 cursor-pointer" />
                            <FaTwitter className="text-xl hover:text-gray-400 cursor-pointer" />
                            <FaInstagram className="text-xl hover:text-gray-400 cursor-pointer" />
                            <FaLinkedin className="text-xl hover:text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                <div>
                <p className="text-gray-400">© 2024 exemple.com. All rights reserved.</p>
                </div><div className="flex space-x-8">
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-gray-200">Terms & Conditions</a>
                    <a href="#" className="text-gray-400 hover:text-gray-200">Privacy Notice</a>
                </div>
                <button className="bg-red-500 p-2 rounded-full mt-4 md:mt-0 hover:bg-red-600">
                    <FaArrowUp className="text-white" />
                </button>
                </div>
            </div>
        </div>
    );
}
