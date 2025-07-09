import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div>


            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="flex-1 min-w-[250px] bg-gray-50 p-5 rounded-lg shadow-sm">
              <div>
                <div className="text-2xl font-bold text-gray-800">Your Cart</div>
                <div className="text-lg font-semibold text-gray-600 mt-2">Summary</div>
                <p className="text-base text-gray-800 mt-2">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="mt-5">
                <p className="text-lg font-bold text-gray-800">
                  Total Amount: ${totalAmount.toFixed(2)}
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-700 transition-colors">
                  CheckOut Now
                </button>
              </div>
            </div>


          </div>) :
          (<div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart Empty</h1>
            <Link to={"/"}>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;
