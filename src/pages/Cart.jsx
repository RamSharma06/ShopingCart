import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart", cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-6">
      {cart.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Your Cart Summary</h2>
            <p className="text-gray-600 mt-2">Total Items: {cart.length}</p>
            <p className="text-lg font-bold text-green-600 mt-4">Total Amount: ${totalAmount.toFixed(2)}</p>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">Your Cart is Empty</h1>
          <Link to="/">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;