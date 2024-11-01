import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function ProductCard({ image, title, description, price, cardHeight,slug }) {
  return (
    <div
      style={{  height: cardHeight }}
      className="bg-white  text-[12px] rounded-lg shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0"
    >
      {/* Image */}
      <div className="flex justify-center items-center bg-gray-100 rounded-md overflow-hidden mb-4">
        <img src={`${process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL}/${image}`} alt={title} className="h-32 object-cover" />
      </div>

      {/* Text content */}
      <div className="text-left flex-1 px-1">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p 
  className="text-gray-600 leading-relaxed line-clamp-3" 
  dangerouslySetInnerHTML={{ __html: description }} 
/>

      </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center mt-2 border-t border-gray-200 pt-3">
        <div className="text-[14px] font-bold text-gray-800">Rs {price}</div>
        <a href={`/customer/pages/products/${slug}`}>
        <button className="text-red-600 w-28 justify-center font-500 flex items-center hover:bg-red-600 hover:text-white transition border p-2 border-red-600 hover:border-white">
          View Details <FaArrowRight className="ml-1 transform -rotate-45" />
        </button>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;

// export default function ProductCard(){
//   return(<>
//   </>)
// }