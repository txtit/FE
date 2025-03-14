import React, { useState } from "react";

const AdminPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Page - User Management</h1>

      {/* Form thêm/sửa người dùng */}
      <form onSubmit={handleSubmit} className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit User" : "Add User"}
        </h2>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={currentUser.name}
            onChange={e =>
              setCurrentUser({ ...currentUser, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={currentUser.email}
            onChange={e =>
              setCurrentUser({ ...currentUser, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update User" : "Add User"}
        </button>
      </form>

      {/* Danh sách người dùng */}
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Select</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td className="border p-2">
                {user.id}
              </td>
              <td className="border p-2">
                {user.name}
              </td>
              <td className="border p-2">
                {user.email}
              </td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Nút xóa người dùng được chọn */}
      {selectedUsers.length > 0 &&
        <div className="mt-6">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete Selected Users
          </button>
        </div>}
    </div>
  );
};

export default AdminPage;
