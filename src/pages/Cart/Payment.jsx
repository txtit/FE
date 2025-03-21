import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../../components/CartContext";
// import { apiCreateOrder } from "../../apis/Order";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext); // Sử dụng CartContext
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(""); // State để lưu thông báo lỗi

  // Lấy tên khách hàng từ localStorage
  const customerName = localStorage.getItem("name") || "";

  // Hàm validate số điện thoại
  const validatePhone = phone => {
    const regex = /^(0|\+84)[1-9][0-9]{8}$/; // Regex cho số điện thoại Việt Nam
    return regex.test(phone);
  };

  // Hàm xử lý tạo đơn hàng
  // const handleCreateOrder = async () => {
  //   const userId = localStorage.getItem("id"); // Lấy user_id từ localStorage
  //   const orderName = `Đơn hàng từ ${customerName}`; // Tạo tên đơn hàng

  //   // Chuẩn bị dữ liệu đơn hàng
  //   const orderData = {
  //     user_id: userId,
  //     name: orderName,
  //     products: cartItems.map(item => ({
  //       product_id: item.id,
  //       quantity: item.quantity
  //     }))
  //   };

  //   try {
  //     // Gửi yêu cầu POST đến API
  //     const response = await apiCreateOrder(orderData);
  //     console.log(response);
  //     if (response) {
  //       toast.success("Tạo đơn hàng thành công!");
  //       clearCart(); // Xóa giỏ hàng sau khi tạo đơn hàng
  //       navigate("/"); // Chuyển hướng về trang chủ
  //     } else {
  //       toast.error("Tạo đơn hàng thất bại!");
  //       console.error("Lỗi khi tạo đơn hàng:", response);
  //     }
  //   } catch (error) {
  //     toast.error("Đã xảy ra lỗi khi tạo đơn hàng!");
  //     console.error("Lỗi API:", error);
  //   }
  // };

  // Hàm xử lý thanh toán
  const handleCheckout = () => {
    // Kiểm tra số điện thoại
    if (!validatePhone(phone)) {
      setPhoneError("Số điện thoại không hợp lệ!");
      return;
    }

    if (!address || !phone) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Gọi hàm tạo đơn hàng
    // handleCreateOrder();
  };

  // Hàm tính tổng giá trị giỏ hàng
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Thanh toán</h1>

      {/* Thông tin giỏ hàng */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Giỏ hàng của bạn</h2>
        {cartItems.length > 0
          ? cartItems.map(item =>
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <p className="text-lg font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-600">
                      {item.price.toLocaleString()}đ
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Số lượng: {item.quantity}
                </p>
              </div>
            )
          : <p className="text-gray-500">Giỏ hàng trống</p>}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Tổng cộng:</p>
          <p className="text-lg font-semibold">
            {calculateTotal().toLocaleString()}đ
          </p>
        </div>
      </div>

      {/* Form nhập thông tin thanh toán */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Thông tin thanh toán</h2>
        <form>
          {/* Hiển thị tên khách hàng */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Tên khách hàng
            </label>
            <input
              type="text"
              value={customerName}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Địa chỉ giao hàng
            </label>
            <input
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Nhập địa chỉ của bạn"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
                setPhoneError(""); // Xóa thông báo lỗi khi người dùng nhập lại
              }}
              className={`w-full p-2 border ${phoneError
                ? "border-red-500"
                : "border-gray-300"} rounded-md`}
              placeholder="Nhập số điện thoại của bạn"
              required
            />
            {phoneError &&
              <p className="text-red-500 text-sm mt-1">
                {phoneError}
              </p>}
          </div>
          {cartItems.length
            ? <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Đặt hàng
              </button>
            : <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-red-900 text-white py-2 px-4 rounded-md "
                disabled={true}
              >
                Giỏ hàng trống
              </button>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
