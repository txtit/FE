import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiCreateProduct } from "../../../apis/product";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    stock: "",
    category_id: ""
  });

  const [errors, setErrors] = useState({});
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

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
    navigate("/admin");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    if (!formData.price.trim()) {
      newErrors.price = "Price is required.";
    } else if (isNaN(formData.price) || formData.price <= 0) {
      newErrors.price = "Price must be a valid number greater than 0.";
    }
    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required.";
    }
    if (!formData.stock.trim()) {
      newErrors.stock = "Stock is required.";
    } else if (isNaN(formData.stock) || formData.stock < 0) {
      newErrors.stock =
        "Stock must be a valid number greater than or equal to 0.";
    }
    if (!formData.category_id.trim()) {
      newErrors.category_id = "Category ID is required.";
    } else if (isNaN(formData.category_id)) {
      newErrors.category_id = "Category ID must be a valid number.";
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
      // Call API to create product
      const response = await apiCreateProduct(formData);

      if (response.status === 200) {
        toast.success("Product created successfully");
        setParams({ keyword: formData.name }, { replace: true });
        navigate("/admin/manageProduct");
      } else {
        toast.error(response.message || "Failed to create product");
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
            <h2 className="text-white text-xl font-semibold">
              Add New Product
            </h2>
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
                  placeholder="Enter Product Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name}
                  </p>}
              </div>

              {/* Description Field */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Product Description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                {errors.description &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.description}
                  </p>}
              </div>

              {/* Price Field */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Product Price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                {errors.price &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.price}
                  </p>}
              </div>

              {/* Image Field */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Image URL"
                  value={formData.image}
                  onChange={handleInputChange}
                />
                {errors.image &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.image}
                  </p>}
              </div>

              {/* Stock Field */}
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-700"
                >
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Product Stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                />
                {errors.stock &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.stock}
                  </p>}
              </div>

              {/* Category ID Field */}
              <div>
                <label
                  htmlFor="category_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category ID
                </label>
                <input
                  type="number"
                  id="category_id"
                  name="category_id"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Category ID"
                  value={formData.category_id}
                  onChange={handleInputChange}
                />
                {errors.category_id &&
                  <p className="text-sm text-red-600 mt-1">
                    {errors.category_id}
                  </p>}
              </div>

              {/* Add Product Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Product
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

export default CreateProduct;
