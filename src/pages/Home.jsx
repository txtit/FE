import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Chào mừng đến với Trang Chủ</h1>
      <p className="text-gray-600">Đây là trang chính của ứng dụng React.</p>
      <div className="mt-4">
        <Link
          to="/about"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Đi đến Giới thiệu
        </Link>
      </div>
    </div>
  );
};

export default Home;
