import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200">
      {/* Image Section */}
      <div className="w-24 h-24 flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
      </div>
      
      {/* Details Section */}
      <div className="flex flex-col flex-grow">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        
        {/* Price and Remove Button */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-green-600">${item.price}</p>
          <button 
            onClick={removeFromCart} 
            className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition duration-200">
            <FcDeleteDatabase className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;