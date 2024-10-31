import { FaArrowRight } from "react-icons/fa";

function ProductCard({ image, title, description, price,cardwidth, cardHeight }) {
  return (
    <div
      style={{ width: cardwidth, height: cardHeight }}
      className="bg-white w-[328px] rounded-lg shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0"
    >
      {/* Image */}
      <div className="flex justify-center items-center bg-gray-100 rounded-md overflow-hidden mb-4 p-4">
        <img src={image} alt={title} className="h-32 object-contain" />
      </div>

      {/* Text content */}
      <div className="text-left flex-1 px-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-1">{description}</p>
      </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center mt-2 border-t border-gray-200 pt-3">
        <div className="text-lg font-bold text-gray-800">Rs {price}</div>
        <button className="text-red-600 font-medium flex items-center hover:text-red-600 transition border p-2 border-red-600">
          View Details <FaArrowRight className="ml-1 transform -rotate-45" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

// export default function ProductCard(){
//   return(<>
//   </>)
// }