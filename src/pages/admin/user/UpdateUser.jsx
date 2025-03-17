import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  apiGetUserById,
  apiUpdateUser,
  apiUpdateUserById
} from "../../../apis/user";

const UpdateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user" // Thêm trường role
  });

  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fetch user data by id
  useEffect(
    () => {
      const fetchUser = async () => {
        const data = await apiGetUserById(id);
        if (data) {
          setFormData(data); // Cập nhật formData với dữ liệu từ API
        }
      };

      fetchUser();
    },
    [id]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleGoBack = () => {
    navigate("/admin/manageUser");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.role) {
      newErrors.role = "Role is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop if validation fails
    }

    try {
      // Call API to update user
      const response = await apiUpdateUserById(id, formData);

      if (response) {
        toast.success("User updated successfully");
        navigate("/admin/manageUser");
      } else {
        toast.error(response.message || "Failed to update user");
      }
    } catch (error) {
      toast.error("Server error, please try again later");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h2 className="text-white text-xl font-semibold">Update User</h2>
          </div>
          <div className="px-6 py-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name}
                  </p>}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email}
                  </p>}
              </div>

              {/* Role Field */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
                {errors.role &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.role}
                  </p>}
              </div>

              {/* Update Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update
                </button>
              </div>

              {/* Cancel Button */}
              <div>
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
