import { useState, useEffect } from "react";
import { FaSearch, FaCarSide } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [subcategories, setSubcategories] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const router = useRouter();

  useEffect(() => {
    // Fetch subcategories
    axios.get('/api/subcategories')
      .then(response => setSubcategories(response.data.data))
      .catch(error => console.error("Error fetching subcategories:", error));

    // Fetch makes (brands)
    axios.get('/api/make')
      .then(response => setMakes(response.data))
      .catch(error => console.error("Error fetching makes:", error));

    // Fetch models
    axios.get('/api/model')
      .then(response => setModels(response.data))
      .catch(error => console.error("Error fetching models:", error));

    // Fetch years
    axios.get('/api/year')
      .then(response => setYears(response.data))
      .catch(error => console.error("Error fetching years:", error));
  }, []);

  const handleSearch = () => {
    const query = new URLSearchParams({
      subcategory: selectedSubcategory,
      make: selectedMake,
      model: selectedModel,
      year: selectedYear
    }).toString();
    router.push(`/customer/pages/Search?${query}`);
  };

  return (
    <div className="h-[108vh] bg-[url('/herosection/herosection.jpeg')] bg-cover bg-center text-center text-white py-20">
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
        <div className="flex justify-center items-center space-x-4 bg-white rounded-lg mx-auto shadow-lg mb-6">
          <div className="py-4 px-6 flex items-center space-x-4">
            <select className="text-gray-700 bg-transparent outline-none py-2 px-4" onChange={(e) => setSelectedSubcategory(e.target.value)}>
              <option>Search</option>
              {subcategories.map((subcategory, index) => (
                <option key={index} value={subcategory.slug}>
                  {subcategory.name}
                </option>
              ))}
            </select>

            <div className="h-10 border-l border-gray-800"></div>

            <select className="text-gray-700 bg-transparent outline-none py-2 px-4" onChange={(e) => setSelectedMake(e.target.value)}>
              <option>Any Makes</option>
              {makes.map((make, index) => (
                <option key={index} value={make.id}>
                  {make.make}
                </option>
              ))}
            </select>

            <div className="h-10 border-l border-gray-800"></div>

            <select className="text-gray-700 bg-transparent outline-none py-2 px-4" onChange={(e) => setSelectedModel(e.target.value)}>
              <option>Any Models</option>
              {models.map((model, index) => (
                <option key={index} value={model.id}>
                  {model.model}
                </option>
              ))}
            </select>

            <div className="h-10 border-l border-gray-800"></div>

            <select className="text-gray-700 bg-transparent outline-none py-2 px-4" onChange={(e) => setSelectedYear(e.target.value)}>
              <option>Years</option>
              {years.map((year, index) => (
                <option key={index} value={year.id}>
                  {year.year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={handleSearch} className="flex items-center bg-red-500 text-white py-6 px-6 rounded-lg font-semibold">
              <FaSearch className="mr-2" /> Search Parts
            </button>
          </div>
        </div>
      </div>

      {/* Browse Options */}
      <p className="text-white mb-4">Or Browse Spare parts</p>
      <div className="flex justify-center flex-wrap gap-4">
        {makes.map((make) => (
          <button
            key={make.id}
            className="flex items-center bg-white text-gray-700 py-2 px-4 rounded-full shadow"
            onClick={() => router.push(`/customer/pages/Search?make=${make.id}`)}
          >
            <FaCarSide className="mr-2" /> {make.make}
          </button>
        ))}
      </div>
    </div>
  );
}
