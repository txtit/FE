import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { apiGetOrderById, apiUpdateOrderById } from "../../../apis/Order";
import { apiGetAllCategories } from "../../../apis/categories";

const UpdateOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    total: "",
    description: "",
    categories: "",
    user: {}, // Thêm thông tin người đặt hàng
    products: [] // Danh sách sản phẩm trong đơn
  });
  const [categoriesList, setCategoriesList] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrder = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await apiGetOrderById(id);
      console.log(data);
      if (data) {
        setFormData({
          name: data.name || "",
          total: data.total || "",
          description: data.description || "",
          categories: data.categories || "",
          user: data.user || {},
          products: data.products || []
        });
      }
    } catch (error) {
      toast.error("Không thể tải dữ liệu đơn hàng!");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

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

  useEffect(() => {
    fetchOrder();
    fetchCategories();
  }, [fetchOrder, fetchCategories]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Tên đơn hàng không được để trống";
    if (!formData.total) newErrors.total = "Giá đơn hàng không được để trống";
    if (formData.total && parseFloat(formData.total) <= 0)
      newErrors.total = "Giá đơn hàng phải lớn hơn 0";
    if (!formData.description)
      newErrors.description = "Mô tả không được để trống";
    if (!formData.categories) newErrors.categories = "Vui lòng chọn danh mục";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!validateForm()) return;
  //   setIsLoading(true);
  //   try {
  //     const response = await apiUpdateOrderById(id, formData);
  //     if (response) {
  //       toast.success("Cập nhật đơn hàng thành công!");
  //       navigate("/admin/manageOrder");
  //     } else {
  //       toast.error("Cập nhật thất bại!");
  //     }
  //   } catch (error) {
  //     toast.error("Lỗi server, vui lòng thử lại sau!");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleFormSubmit = async (event) => {
    navigate("/admin/manageUser");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Cập nhật đơn hàng</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="block text-sm font-medium">Tên đơn hàng</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleInputChange}
            disabled={true}
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Giá</label>
          <input
            type="number"
            name="total"
            className="w-full border p-2 rounded"
            value={formData.total}
            onChange={handleInputChange}
            disabled={true}

          />
          {errors.total && <p className="text-red-600">{errors.total}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Mô tả</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && <p className="text-red-600">{errors.description}</p>}
        </div>

        {/* <div>
          <label className="block text-sm font-medium">Danh mục</label>
          <select
            name="categories"
            className="w-full border p-2 rounded"
            value={formData.categories}
            onChange={handleInputChange}
          >
            <option value="">Chọn danh mục</option>
            {categoriesList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categories && <p className="text-red-600">{errors.categories}</p>}
        </div> */}

        {/* Hiển thị thông tin người đặt hàng */}
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-semibold">Thông tin người đặt hàng</h3>
          <p><strong>Tên:</strong> {formData.user?.name || "Không có thông tin"}</p>
          <p><strong>Email:</strong> {formData.user?.email || "Không có thông tin"}</p>
        </div>

        {/* Hiển thị danh sách sản phẩm trong đơn */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Danh sách sản phẩm</h3>
          {formData.products.length > 0 ? (
            <table className="w-full border mt-2">
              <thead>
                <tr>
                  <th className="border p-2">Tên sản phẩm</th>
                  <th className="border p-2">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {formData.products.map((product, index) => (
                  <tr key={index}>
                    <td className="border p-2">{product.name}</td>
                    <td className="border p-2">{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">Không có sản phẩm trong đơn hàng</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
          disabled={isLoading}
        >
          Quay lại
        </button>
      </form>
    </div>
  );
};

export default UpdateOrder;
