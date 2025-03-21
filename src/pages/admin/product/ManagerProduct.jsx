import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IconButton, Pagination, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { apiGetAllProduct } from "../../../apis/product";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái tìm kiếm
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiGetAllProduct();
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          toast.error("Lỗi khi tải dữ liệu sản phẩm");
        }
      } catch (error) {
        toast.error("Lỗi kết nối máy chủ");
      }
    };
    fetchProducts();
  }, []);

  // Lọc danh sách sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Phân trang dữ liệu
  const indexOfLastProduct = currentPage * usersPerPage;
  const indexOfFirstProduct = indexOfLastProduct - usersPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / usersPerPage);

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Quản lý Sản Phẩm</h1> */}
      {/* Ô tìm kiếm
      <TextField
        label="Tìm kiếm..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="mb-4"
      /> */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-600 border-b">
              <th className="px-4 py-2 text-left text-amber-50">ID</th>
              <th className="px-4 py-2 text-left text-amber-50">Tên</th>
              <th className="px-4 py-2 text-left text-amber-50">Price</th>
              <th className="px-4 py-2 text-left text-amber-50">Stock</th>
              <th className="px-4 py-2 text-left text-amber-50">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) =>
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  {product.id}
                </td>
                <td className="px-4 py-2">
                  {product.name}
                </td>
                <td className="px-4 py-2">
                  {product.price}
                </td>
                <td className="px-4 py-2">
                  {product.stock}
                </td>
                <td className="px-4 py-2">
                  <Link to={`/admin/updateProduct/${product.id}`}>
                    <IconButton>
                      <EditIcon className="text-green-800" />
                    </IconButton>
                  </Link>
                  <IconButton>
                    <DeleteIcon className="text-red-600" />
                  </IconButton>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Phân trang */}
      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </div>
    </div>
  );
};

export default ManageProduct;
