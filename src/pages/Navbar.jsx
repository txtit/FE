import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../components/CartContext";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext); // Sử dụng CartContext

  // Hàm mở/đóng modal giỏ hàng
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Hàm xử lý thay đổi số lượng sản phẩm trong giỏ hàng
  const handleQuantityChange = (productId, action) => {
    const product = cartItems.find(item => item.id === productId);
    if (product) {
      const newQuantity =
        action === "increase"
          ? product.quantity + 1
          : Math.max(1, product.quantity - 1);
      updateQuantity(productId, newQuantity);
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const handleRemoveItem = productId => {
    removeFromCart(productId);
    toast.success("Xóa sản phẩm khỏi giỏ hàng thành công!");
  };

  const handleThanhToan = () => {
    navigate("/checkout");
    handleCloseModal();
  };

  // Hàm tính tổng giá trị giỏ hàng
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    toast.success("Đăng xuất thành công!");
    navigate("/login");
  };

  return (
    <header className="bg-[#e6e7ee]">
      <nav className="border border-[#d1d9e6] box-shadow">
        <div className="container">
          <div className="py-4 flex w-full relative justify-center">
            <a href="/app">
              <span className="fa-solid fa-cloud mr-6 mt-6 border border-[#d1d9e6] p-4 rounded-[8.8px] box-shadowv3" />
            </a>
            <div className="w-full navbar-item flex flex-wrap justify-between items-center">
              <div className="menu">
                <ul className="flex flex-wrap w-full">
                  <li className="group mr-6 p-4 font-normal">
                    <a className="">
                      Pages
                      <span className="group-hover:rotate-180 duration-300 fas fa-angle-down nav-link-arrow ml-2" />
                    </a>
                    <ul className="dropdown-menu hidden group-hover:block absolute rounded-[8.8px] box-shadow bg-[#e6e7ee] py-4 w-[300px] border border-[#d1d9e6] mt-4 z-30">
                      <li>
                        <a
                          href="/about"
                          className="block w-full py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/product"
                          className="block w-full py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="block w-full py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group mr-6 p-4 font-normal">
                    <a className="">
                      Components
                      <span className="group-hover:rotate-180 duration-300 fas fa-angle-down nav-link-arrow ml-2" />
                    </a>
                    <div className="dropdown-menu hidden group-hover:block absolute w-full left-0 mt-[1.9rem]">
                      <div className="flex flex-row absolute rounded-[8.8px] box-shadow bg-[#e6e7ee] p-5 z-10">
                        <div className=".col-lg-6 max-w-full px-6 pb-5 pt-3 basis-1/2">
                          <img
                            className="w-full"
                            src="https://demo.themesberg.com/neumorphism-ui/assets/img/megamenu-image.jpg"
                            alt="hinhanh"
                          />
                        </div>
                        <div className="col flex-1">
                          <ul className="dropdown-menu rounded-[8.8px] mt-4 z-30">
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Contact
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Sign in
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Sign up
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col flex-1">
                          <ul className="dropdown-menu rounded-[8.8px] mt-4 z-30">
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Contact
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Sign in
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Sign up
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col flex-1">
                          <ul className="dropdown-menu rounded-[8.8px] mt-4 z-30">
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Contact
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Sign in
                              </a>
                            </li>
                            <li>
                              <a
                                href="../../html/pages/about.html"
                                className="block py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                              >
                                Sign up
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group mr-6 p-4 font-normal">
                    <a className="" href="/pro">
                      {" "}Support
                      <span className="group-hover:rotate-180 duration-300 fas fa-angle-down nav-link-arrow ml-2" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="button flex flex-wrap">
                {/* Nút giỏ hàng */}
                <div className="docs">
                  <button
                    onClick={handleOpenModal}
                    className="hover:shadow-customInset hover:cursor-pointer box-shadow rounded-[8.8px] flex py-2 px-4 text-center items-center mr-4 border border-[#d1d9e6] text-[16px] font-normal"
                  >
                    <i className="fas fa-cart-plus mr-2" /> Cart{" "}
                    <span className="cartQuantity badge badge-pill badge-success rounded-[10rem] ml-2">
                      {cartItems.length}
                    </span>
                  </button>
                </div>

                {/* Dropdown người dùng */}
                <div className="Update">
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="hover:shadow-customInset hover:cursor-pointer box-shadow rounded-[8.8px] flex py-2 px-4 text-center items-center border border-[#d1d9e6] text-[#2d4cc8] text-[16px] font-normal"
                    >
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>
                        {localStorage.getItem("name")}
                      </span>
                      <i className="fas fa-angle-down ml-2" />
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen &&
                      <div className="absolute right-0 mt-2 w-48 rounded-[8.8px] box-shadow bg-[#e6e7ee] border border-[#e6e7ee] z-30">
                        <ul>
                          <li>
                            <a
                              href="/profile"
                              className="block w-full py-2 px-4 hover:bg-gray-100 rounded-[8.8px]"
                            >
                              Hồ sơ
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="/admin/manageUser" // Thay bằng đường dẫn đến trang quản trị
                              className="block w-full py-2 px-4 hover:bg-gray-100 rounded-[8.8px]"
                            >
                              Trang quản trị
                            </a>
                          </li>
                          <li>
                            <button
                              onClick={handleLogout}
                              className="block w-full py-2 px-4 hover:bg-gray-100 rounded-[8.8px] text-left"
                            >
                              Đăng xuất
                            </button>
                          </li>
                        </ul>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal giỏ hàng */}
      {isModalOpen &&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 !z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
            <h2 className="text-2xl font-semibold mb-4">Giỏ hàng</h2>
            <div className="space-y-4">
              {cartItems.length > 0
                ? cartItems.map(item =>
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          className="w-12 h-12 rounded-md"
                          alt={item.name}
                        />
                        <div className="ml-3">
                          <p className="text-gray-800 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {item.price.toLocaleString()}đ
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="qty-btn px-2 py-1 bg-gray-200 rounded text-gray-700"
                          onClick={() =>
                            handleQuantityChange(item.id, "decrease")}
                        >
                          −
                        </button>
                        <span className="quantity text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          className="qty-btn px-2 py-1 bg-gray-200 rounded text-gray-700"
                          onClick={() =>
                            handleQuantityChange(item.id, "increase")}
                        >
                          +
                        </button>
                        <button
                          className="remove-btn text-red-500 hover:text-red-700 text-lg"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          ✖
                        </button>
                      </div>
                    </div>
                  )
                : <p className="text-center text-gray-500">Giỏ hàng trống</p>}
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-4">
              <span>Tổng cộng:</span>
              <span id="totalPrice">
                {calculateTotal().toLocaleString()}đ
              </span>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Đóng
              </button>
              <button
                onClick={handleThanhToan}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>}
    </header>
  );
};

export default Navbar;
