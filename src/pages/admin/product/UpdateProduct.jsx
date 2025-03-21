import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { apiGetProductById, apiUpdateProductById } from "../../../apis/product";
import {
  apiCreateCategories,
  apiGetAllCategories
} from "../../../apis/categories";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category_id: ""
  });
  const [categoriesList, setCategoriesList] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchProduct = useCallback(
    async () => {
      setIsLoading(true);
      try {
        const data = await apiGetProductById(id);
        if (data) {
          setFormData({
            name: data.name || "",
            price: data.price || "",
            description: data.description || "",
            category_id: data.category_id || ""
          });
        }
      } catch (error) {
        toast.error("Không thể tải dữ liệu sản phẩm!");
      } finally {
        setIsLoading(false);
      }
    },
    [id]
  );
  const fetchCategories = useCallback(async () => {
    try {
      const data = await apiGetAllCategories();
      if (data) {
        setCategoriesList(data.data);
      }
    } catch (error) {
      toast.error("Không thể tải danh sách danh mục!");
    }
  }, []);

  useEffect(
    () => {
      fetchProduct();
      fetchCategories();
    },
    [fetchProduct, fetchCategories]
  );

  console.log(categoriesList);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Tên sản phẩm không được để trống";
    if (!formData.price) newErrors.price = "Giá sản phẩm không được để trống";
    if (formData.price && parseFloat(formData.price) <= 0)
      newErrors.price = "Giá sản phẩm phải lớn hơn 0";
    if (!formData.description)
      newErrors.description = "Mô tả không được để trống";
    if (!formData.category_id) newErrors.categories = "Vui lòng chọn danh mục";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const response = await apiUpdateProductById(id, formData);
      if (response) {
        toast.success("Cập nhật sản phẩm thành công!");
        navigate("/admin/manageProduct");
      } else {
        toast.error("Cập nhật thất bại!");
      }
    } catch (error) {
      toast.error("Lỗi server, vui lòng thử lại sau!");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Cập nhật sản phẩm</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="block text-sm font-medium">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name &&
            <p className="text-red-600">
              {errors.name}
            </p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Giá</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded"
            value={formData.price}
            onChange={handleInputChange}
          />
          {errors.price &&
            <p className="text-red-600">
              {errors.price}
            </p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Mô tả</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description &&
            <p className="text-red-600">
              {errors.description}
            </p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Danh mục</label>
          <select
            name="category_id"
            className="w-full border p-2 rounded"
            value={formData.category_id}
            onChange={handleInputChange}
          >
            <option value="">Chọn danh mục</option>
            {categoriesList.map(category =>
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            )}
          </select>
          {errors.categories &&
            <p className="text-red-600">
              {errors.categories}
            </p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4"
          disabled={isLoading}
        >
          {isLoading ? "Đang cập nhật..." : "Cập nhật"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
