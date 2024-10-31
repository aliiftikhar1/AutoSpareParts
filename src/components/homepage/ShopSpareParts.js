'use client'
import { useState } from "react";

export default function ShopSpareParts() {
    const tabs = {
        "New Cars Parts": [
            "Transmission", "CV joint", "Boot Kit", "Universal joint", "Cardan shaft bearing", "Engine mounting",
            "Other lamp", "Brake", "Brake pad", "Brake disk", "Brake drum", "Brake shoe",
            "Oil filter", "Air filter", "Fuel filter", "Spark plug", "Radiator", "Fan belt",
            "Alternator", "Battery", "Head gasket", "Piston", "Crankshaft", "Camshaft"
        ],
        "Used Cars Parts": [
            "Gearbox mounting", "Clutch Cover", "Clutch disk", "Clutch release bearing", "Auto lamp", "Head lamp",
            "Rearview mirror", "Side mirror", "Door handle", "Windshield wiper", "Floor mat", "Car seat cover",
            "Exhaust pipe", "Muffler", "Catalytic converter", "Shock absorber", "Strut", "Axle",
            "Driveshaft", "Control arm", "Ball joint", "Sway bar", "Stabilizer link", "Wheel hub"
        ],
        "Browse By Type": [
            "Other lamp", "Brake", "Brake pad", "Brake disk", "Brake drum", "Brake shoe",
            "Steering wheel", "Steering column", "Steering rack", "Power steering pump", "Horn", "Speedometer",
            "Tachometer", "Fuel gauge", "Temperature gauge", "Oil pressure gauge", "Alternator belt", "Timing chain",
            "Timing cover", "Timing gear", "Timing belt tensioner", "Camshaft pulley", "Crankshaft pulley", "Water pump"
        ],
        "Browse By Brand": [
            "Belt and roller", "V-belt", "Poly-V belt", "Timing belt", "Deflection pulley", "Tension roller",
            "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW",
            "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai", "Kia", "Mazda",
            "Subaru", "Jeep", "Dodge", "Ram", 
        ]
    };

    const [activeTab, setActiveTab] = useState("New Cars Parts");

    // Function to split items into arrays of 6 items each
    const chunkItems = (items, chunkSize = 6) => {
        const chunks = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            chunks.push(items.slice(i, i + chunkSize));
        }
        return chunks;
    };

    // Split items for the active tab into chunks of 6 items each
    const columns = chunkItems(tabs[activeTab]);

    return (
        <div className="w-full px-12">
            {/* Header */}
            <div className="flex justify-between mb-4">
                <h1 className="text-4xl font-bold">Shop Spare Parts</h1>
                <button className="text-blue-500 hover:underline">View More</button>
            </div>

            {/* Tabs */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex border-b border-gray-200">
                    {Object.keys(tabs).map((tab, index) => (
                        <button
                            key={index}
                            className={`py-4 px-6 block hover:text-blue-500 focus:outline-none ${activeTab === tab ? 'text-blue-600 border-blue-500 border-b-2' : 'text-gray-600'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Items List in Columns */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {columns.map((column, columnIndex) => (
                        <ul key={columnIndex} className="space-y-2">
                            {column.map((item, index) => (
                                <li key={index} className="text-gray-700 py-2 hover:text-gray-900 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}
