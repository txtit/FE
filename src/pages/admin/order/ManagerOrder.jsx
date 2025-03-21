import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IconButton, Pagination, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import { apiGetAllOrder } from "../../../apis/Order";

const ManageOrder = () => {
  const [Orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái tìm kiếm
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const response = await apiGetAllOrder();
  //       console.log(response.data.map(order => order.user.name));

  //       if (response.status === 200) {
  //         setOrders(response.data);
  //       } else {
  //         toast.error("Lỗi khi tải dữ liệu đơn hàng");
  //       }
  //     } catch (error) {
  //       toast.error("Lỗi kết nối máy chủ");
  //     }
  //   };
  //   fetchOrders();
  // }, []);
  // Lọc danh sách đơn hàng theo từ khóa tìm kiếm
  const filteredOrders = Orders.filter(
    Order => Order.name.toLowerCase().includes(searchTerm.toLowerCase())
    // Order.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Phân trang dữ liệu
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

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
          placeholder="Tìm kiếm đơn hàng..."
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
              <th className="px-4 py-2 text-left text-amber-50">Total</th>
              <th className="px-4 py-2 text-left text-amber-50">User</th>
              <th className="px-4 py-2 text-left text-amber-50">UserID</th>
              <th className="px-4 py-2 text-left text-amber-50">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((Order, index) =>
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  {Order.id}
                </td>
                <td className="px-4 py-2">
                  {Order.name}
                </td>
                <td className="px-4 py-2">
                  {Order.total}
                </td>
                <td className="px-4 py-2">
                  {Order.user.name}
                </td>
                <td className="px-4 py-2">
                  {Order.user.id}
                </td>
                <td className="px-4 py-2">
                  <Link to={`/admin/updateOrder/${Order.id}`}>
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

export default ManageOrder;
