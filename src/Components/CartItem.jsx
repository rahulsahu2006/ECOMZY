import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slice/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex gap-5 p-4 border-b border-gray-200 bg-white rounded-lg mb-4 shadow-sm font-sans">
      <div className="flex-shrink-0 w-36">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-36 object-contain rounded-md"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            {item.title}
          </h1>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {item.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-base font-bold text-gray-800">
            ${item.price.toFixed(2)}
          </p>
          <div
            onClick={removeFromCart}
            className="cursor-pointer p-2 bg-red-100 rounded-md hover:bg-red-200 transition-colors"
          >
            <FcDeleteDatabase size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;