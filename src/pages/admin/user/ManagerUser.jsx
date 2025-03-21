import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiGetAllUser } from "../../../apis/user";
import { IconButton, Pagination, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái tìm kiếm
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiGetAllUser();
        if (response.status === 200) {
          setUsers(response.data);
        } else {
          toast.error("Lỗi khi tải dữ liệu người dùng");
        }
      } catch (error) {
        toast.error("Lỗi kết nối máy chủ");
      }
    };
    fetchUsers();
  }, []);

  // Lọc danh sách người dùng theo từ khóa tìm kiếm
  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Phân trang dữ liệu
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Quản lý Người dùng</h1> */}
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
          placeholder="Tìm kiếm người dùng..."
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
              <th className="px-4 py-2 text-left text-amber-50">Email</th>
              <th className="px-4 py-2 text-left text-amber-50">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) =>
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  {user.id}
                </td>
                <td className="px-4 py-2">
                  {user.name}
                </td>
                <td className="px-4 py-2">
                  {user.email}
                </td>
                <td className="px-4 py-2">
                  <Link to={`/admin/updateUser/${user.id}`}>
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

export default ManageUser;
