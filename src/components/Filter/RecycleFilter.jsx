import React, { useState, useEffect } from "react";
// import { apiGetAllUser } from "../../apis/admin";
// import { apiGetAllDental } from "../../apis/dental";
// import { apiGetAllProduct } from "../../apis/product";
import { useLocation, useNavigate } from "react-router-dom";
// import { useLoading } from "../../main";

const DropdownFilter = ({ onChange }) => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const [dentals, setDentals] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      // Lấy phần cuối của đường dẫn từ location.pathname
      const pathSegments = location.pathname.split("/"); // Tách URL thành mảng
      const lastSegment = pathSegments[pathSegments.length - 1]; // Phần cuối của đường dẫn

      // Kiểm tra giá trị cuối cùng trong đường dẫn và cập nhật giá trị cho selectedValue
      if (lastSegment === "manage-user") {
        setSelectedValue("user");
      } else if (lastSegment === "manage-dental") {
        setSelectedValue("dental");
      } else if (lastSegment === "manage-product") {
        setSelectedValue("product");
      }
    },
    [location]
  );
  const [selectedValue, setSelectedValue] = useState(""); // Trạng thái giá trị đã chọn

  // Fetch users, dentals, products from APIs
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userResponse = await apiGetAllUser({ isActive: true }); // API lấy tất cả người dùng
  //     const dentalResponse = await apiGetAllDental({ isActive: true }); // API lấy tất cả nha khoa
  //     const productResponse = await apiGetAllProduct({ isActive: true }); // API lấy tất cả sản phẩm

  //     if (userResponse.success) {
  //       setUsers(userResponse.users);
  //     }
  //     if (dentalResponse.ok) {
  //       setDentals(await dentalResponse.json());
  //     }
  //     if (productResponse.ok) {
  //       setProducts(await productResponse.json());
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
    onChange(e.target.value); // Gọi hàm callback với giá trị đã chọn
    // Cập nhật URL với giá trị filter mới (quản lý trang dựa trên lựa chọn)
  };

  return (
    <div className="custom-dropdown">
      <select
        id="filterDropdown"
        className={`custom-select `}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Chọn
        </option>
        <option value="user">Người Dùng</option>
        <option value="dental">Nha Khoa</option>
        <option value="product">Sản Phẩm</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
