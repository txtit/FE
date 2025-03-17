import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogout } from "../apis/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [userName, setUserName] = useState([]);

  const getUserName = localStorage.getItem("name");
  console.log(getUserName);
  useEffect(
    () => {
      setUserName(getUserName);
      console.log(userName);
    },
    [navigate]
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (action, quantityElement) => {
    let quantity = parseInt(quantityElement.innerText);
    if (action === "increase") {
      quantity++;
    } else if (action === "decrease" && quantity > 1) {
      quantity--;
    }
    quantityElement.innerText = quantity;
    updateTotal();
  };

  const updateTotal = () => {
    let total = 0;
    document.querySelectorAll(".border-b").forEach(item => {
      const price = parseInt(
        item
          .querySelector("p.text-gray-600")
          .innerText.replace("đ", "")
          .replace(".", "")
      );
      const quantity = parseInt(item.querySelector(".quantity").innerText);
      total += price * quantity;
    });
    document.getElementById("totalPrice").innerText =
      total.toLocaleString() + "đđ";
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await apiLogout();
      navigate("/login");
      toast.success("Đăng Xuất Thành công!");
    } catch (err) {
      toast.error("Đăng Xuất Thất Bại, Hãy Thử Lại!");
    }
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
                          href="../../html/pages/about.html"
                          className="block w-full py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pricing"
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
                      <li>
                        <a
                          href="../../html/pages/about.html"
                          className="block w-full py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                        >
                          Sign in
                        </a>
                      </li>
                      <li>
                        <a
                          href="../../html/pages/about.html"
                          className="block w-full py-2 px-4 hover:cursor-pointer hover:shadow-customInset rounded-[8.8px]"
                        >
                          Sign up
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
                    <a className="">
                      Support
                      <span className="group-hover:rotate-180 duration-300 fas fa-angle-down nav-link-arrow ml-2" />
                    </a>
                    <ul className="dropdown-menu hidden group-hover:block absolute rounded-[8.8px] box-shadow bg-[#e6e7ee] border border-[#d1d9e6] mt-4 z-30">
                      <li className="flex">
                        <a
                          href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/"
                          target="_blank"
                          className="list-group-item list-group-item-action flex items-center p-0 py-4 px-6"
                        >
                          <span className="icon text-2xl icon-secondary">
                            <span className="fas fa-file-alt" />
                          </span>
                          <div className="flex flex-col ms-4">
                            <span className="text-dark">
                              Documentation
                              <span className="badge badge-sm badge-secondary align-middle ms-2">
                                v1.0
                              </span>
                            </span>
                            <span className="small text-muted">
                              Examples and guides
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/"
                          target="_blank"
                          className="list-group-item list-group-item-action flex items-center p-0 py-4 px-6"
                        >
                          <span className="icon text-2xl icon-secondary">
                            <span className="fas fa-microphone-alt" />
                          </span>
                          <div className="flex flex-col ms-4">
                            <span className="text-dark">
                              Support
                              <span className="badge badge-sm badge-secondary align-middle ms-2">
                                v1.0
                              </span>
                            </span>
                            <span className="small text-muted">
                              Looking for answers? Ask us!
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="button flex flex-wrap">
                <div className="docs">
                  <button
                    id="openModal"
                    onClick={handleOpenModal}
                    className="hover:shadow-customInset hover:cursor-pointer box-shadow rounded-[8.8px] flex py-2 px-4 text-center items-center mr-4 border border-[#d1d9e6] text-[16px] font-normal"
                  >
                    <i className="fas fa-cart-plus mr-2" /> Cart{" "}
                    <span className="cartQuantity badge badge-pill badge-success rounded-[10rem] ml-2">
                      0
                    </span>
                  </button>
                </div>
                <div className="Update">
                  <div className="relative">
                    {/* Avatar */}
                    <button
                      onClick={toggleDropdown}
                      className="hover:shadow-customInset hover:cursor-pointer box-shadow rounded-[8.8px] flex py-2 px-4 text-center items-center border border-[#d1d9e6] text-[#2d4cc8] text-[16px] font-normal"
                    >
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg" // Thay bằng URL avatar của bạn
                        alt="Avatar"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>{userName}</span> {/* Thay bằng tên người dùng */}
                      <i className="fas fa-angle-down ml-2" />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen &&
                      <div className="absolute right-0 mt-2 w-48 rounded-[8.8px] box-shadow bg-[#e6e7ee] border border-[#e6e7ee] z-30">
                        <ul>
                          <li>
                            <a
                              href="/profile" // Thay bằng đường dẫn đến trang hồ sơ
                              className="block w-full py-2 px-4 hover:bg-gray-100 rounded-[8.8px]"
                            >
                              Hồ sơ
                            </a>
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

      {/* Cart Modal */}
      {isModalOpen &&
        <div className="fixed inset-0 flex items-center justify-center bg-black !z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
            <h2 className="text-2xl font-semibold mb-4">Cart</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center">
                  <img
                    src="https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-1.jpg"
                    className="w-12 h-12 rounded-md"
                    alt="Product A"
                  />
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">Product A</p>
                    <p className="text-gray-600 text-sm">200.000đ</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="qty-btn px-2 py-1 bg-gray-200 rounded text-gray-700"
                    onClick={() =>
                      handleQuantityChange(
                        "decrease",
                        document.querySelector(".quantity")
                      )}
                  >
                    −
                  </button>
                  <span className="quantity text-gray-800">1</span>
                  <button
                    className="qty-btn px-2 py-1 bg-gray-200 rounded text-gray-700"
                    onClick={() =>
                      handleQuantityChange(
                        "increase",
                        document.querySelector(".quantity")
                      )}
                  >
                    +
                  </button>
                  <button className="remove-btn text-red-500 hover:text-red-700 text-lg">
                    ✖
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center">
                  <img
                    src="https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-2.jpg"
                    className="w-12 h-12 rounded-md"
                    alt="Product B"
                  />
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">Product B</p>
                    <p className="text-gray-600 text-sm">300.000đ</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="qty-btn px-2 py-1 bg-gray-200 rounded text-gray-700"
                    onClick={() =>
                      handleQuantityChange(
                        "decrease",
                        document.querySelector(".quantity")
                      )}
                  >
                    −
                  </button>
                  <span className="quantity text-gray-800">2</span>
                  <button
                    className="qty-btn px-2 py-1 bg-gray-200 rounded text-gray-700"
                    onClick={() =>
                      handleQuantityChange(
                        "increase",
                        document.querySelector(".quantity")
                      )}
                  >
                    +
                  </button>
                  <button className="remove-btn text-red-500 hover:text-red-700 text-lg">
                    ✖
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-4">
              <span>Total:</span>
              <span id="totalPrice">800.000đ</span>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </div>}
    </header>
  );
};

export default Navbar;
