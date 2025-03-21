import React, { useState, useEffect, useContext } from "react";
import { apiGetAllProduct, apiGetProductNear } from "../../apis/product";
import { toast } from "react-toastify";
import CartContext from "../../components/CartContext";

const Product = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [nearProducts, setNearProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const userId = localStorage.getItem("id");
  const { addToCart } = useContext(CartContext); // Sử dụng CartContext

  // Lấy tất cả sản phẩm khi component được render
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await apiGetAllProduct();
        if (response.status === 200) {
          setAllProducts(response.data);
        } else {
          console.error("Dữ liệu sản phẩm không hợp lệ!", response);
          setAllProducts([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchAllProducts();
  }, []);

  // Xử lý thay đổi tab
  const handleTabChange = async tab => {
    setActiveTab(tab);

    if (tab === "near") {
      if (!userId) {
        toast.error("Vui lòng đăng nhập để xem sản phẩm dành cho bạn!");
        return;
      }

      try {
        const response = await apiGetProductNear(userId);
        if (response) {
          setNearProducts(response.products);
        } else {
          console.error("Dữ liệu sản phẩm gần không hợp lệ!", response);
          setNearProducts([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm gần:", error);
      }
    }
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = product => {
    addToCart(product); // Sử dụng hàm addToCart từ CartContext
    toast.success("Thêm sản phẩm vào giỏ hàng thành công!");
  };

  return (
    <section className="blog card">
      <div className="container">
        <div className="title mb-[128px]">
          <h1 className="text-center text-3xl">Our Products</h1>
        </div>

        {/* Tabs */}
        <div className="tabs flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 ${activeTab === "all"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-700 border-transparent"}`}
            onClick={() => handleTabChange("all")}
          >
            Tất cả
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === "near"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-700 border-transparent"}`}
            onClick={() => handleTabChange("near")}
          >
            Dành cho bạn
          </button>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="list-cards">
          <div className="grid grid-cols-2 gap-y-[30px] gap-x-[30px]">
            {(activeTab === "all" ? allProducts : nearProducts).length > 0
              ? (activeTab === "all"
                  ? allProducts
                  : nearProducts).map(product =>
                  <div className="blog-card mb-[60px]" key={product.id}>
                    <div className="card border border-[#d1d9e6] rounded-[8.8px]">
                      <div className="card-header">
                        <img
                          className="rounded-[8.8px]"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                      <div className="card-body">
                        <h3 className="text-[1.25rem] font-medium mt-3">
                          {product.name}
                        </h3>
                        <p className="card-text mb-4">
                          {product.description}
                        </p>
                        <div className="flex justify-between">
                          <a
                            href={`/detail/${product.id}`}
                            className="btn btn-primary"
                          >
                            Xem chi tiết
                          </a>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleAddToCart(product)}
                          >
                            Thêm vào giỏ hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              : <p className="text-center text-gray-500 mt-4">
                  {activeTab === "near"
                    ? "Không có sản phẩm gần bạn."
                    : "Không có sản phẩm nào."}
                </p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
