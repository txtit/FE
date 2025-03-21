import React, { memo, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaFileExcel } from "react-icons/fa";
// import { useLoading } from "../../main";
import path from "../../utils/path";
import DropdownFilter from "../Filter/RecycleFilter";
import { Button, IconButton } from "@mui/material";
import { apiLogout } from "../../apis/auth";
import DropdownMenu from "../DropdownMenu";

const NavigationAdmin = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { setLoading } = useLoading();
  const [content, setContent] = useState("");
  const [isDropdownUserOpen, setIsDropdownUserOpen] = useState(false);
  const [isDropdownProductOpen, setIsDropdownProductOpen] = useState(false);
  const [isDropdownOrderOpen, setIsDropdownOrderOpen] = useState(false);
  useEffect(
    () => {
      // Lấy phần cuối của đường dẫn từ location.pathname
      const pathSegments = location.pathname.split("/"); // Tách URL thành mảng
      const lastSegment = pathSegments[pathSegments.length - 1]; // Phần cuối của đường dẫn

      // Kiểm tra giá trị cuối cùng trong đường dẫn và cập nhật giá trị cho selectedValue
      if (lastSegment === "manageUser") {
        setContent("QUẢN LÝ NGƯỜI DÙNG");
      } else if (lastSegment === "manageProduct") {
        setContent("QUẢN LÝ SẢN PHẨM");
      } else if (lastSegment === "manageOrder") {
        setContent("QUẢN LÝ ĐƠN HÀNG");
      } else {
        setContent("");
      }
    },
    [location]
  );
  const handleOpenCreate = e => {
    navigate("/admin/addUser");
  };
  const handleOpenProduct = e => {
    navigate("/admin/addProduct");
  };
  const handleOpenOrder = e => {
    navigate("/admin/addOrder");
  };
  const handleOpenCategory = e => {
    navigate("/admin/addCategory");
  };

  const userDropdownItems = [
    { label: "Create New User", onClick: handleOpenCreate },
    { label: "Import User", onClick: () => console.log("Import User clicked") },
    { label: "Export User", onClick: () => console.log("Export User clicked") }
  ];
  const productDropdownItems = [
    { label: "Create New Product", onClick: handleOpenProduct },
    // { label: "Create New Category", onClick: handleOpenProduct },
    {
      label: "Import Product",
      onClick: () => console.log("Import Product clicked")
    },
    {
      label: "Export Product",
      onClick: () => console.log("Export Product clicked")
    }
  ];
  const orderDropdownItems = [
    { label: "Create New Order ", onClick: handleOpenOrder },
    // { label: "Create New Category", onClick: handleOpenOrder },
    {
      label: "Import Order",
      onClick: () => console.log("Import Order clicked")
    },
    {
      label: "Export Order",
      onClick: () => console.log("Export Order clicked")
    }
  ];
  const handleFilterChange = value => {
    if (value === "user") {
      navigate("/admin/manageUser"); // Điều hướng đến trang quản lý người dùng
    } else if (value === "product") {
      // Điều hướng đến trang quản lý sản phẩm
      navigate("/admin/manageProduct");
    } else if (value === "order") {
      // Điều hướng đến trang quản lý sản phẩm
      navigate("/admin/manageOrder");
    }
  };

  const handleLogout = async e => {
    // Clear session data
    try {
      await apiLogout();
      navigate("/login");
      toast.success("Đăng Xuất Thành công!");
    } catch (err) {
      toast.error(`Lỗi${err}`);
    }
    // Optionally, display a toast notification
  };

  const handleOpenManager = e => {
    // Clear session data
    setLoading(true);
    // localStorage.removeItem('user');
    // Redirect to the login page
    setTimeout(() => {
      navigate("/admin/create-dental");
      setLoading(false);
    }, 1000);
    // Optionally, display a toast notification
  };

  const handleOpenRecycle = e => {
    // Clear session data
    setLoading(true);
    // localStorage.removeItem('user');

    // Redirect to the login page
    setTimeout(() => {
      // navigate(`${path.ADMIN}/${path.RECYCLE}`);
      navigate("/admin/recycle");
      setLoading(false);
    }, 1000);
    // Optionally, display a toast notification
  };

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <nav className="bg-black">
        <div className="container mx-auto py-2 ">
          <div className="flex justify-between items-center pt-2">
            <Link
              to={"/admin/manageUser"}
              className="flex items-center text-white text-xl font-semibold"
            >
              <i className="fas fa-code me-2 text-2xl" /> {/* Larger title */}
              AdminPage
            </Link>
            <button
              className="text-white focus:outline-none lg:hidden"
              onClick={toggleNavbar}
            >
              <i
                className={`fas ${collapsed ? "fa-bars" : "fa-times"} text-2xl`}
              />{" "}
              {/* Larger toggle icon */}
            </button>
            <div className="flex flex-row  lg:ml-auto">
              {/* AddUser  */}
              <DropdownMenu
                title=" User"
                items={userDropdownItems}
                isOpen={isDropdownUserOpen}
                toggleDropdown={() =>
                  setIsDropdownUserOpen(!isDropdownUserOpen)}
              />
              {/* AddProduct Dropdown */}
              <DropdownMenu
                title=" Product"
                items={productDropdownItems}
                isOpen={isDropdownProductOpen}
                toggleDropdown={() =>
                  setIsDropdownProductOpen(!isDropdownProductOpen)}
              />
              {/* AddOrder Dropdown
              <DropdownMenu
                title=" Order"
                items={productDropdownItems}
                isOpen={isDropdownOrderOpen}
                toggleDropdown={() =>
                  setIsDropdownOrderOpen(!isDropdownOrderOpen)}
              /> */}
              {/* Logout */}
              <div className="nav-item">
                <span
                  onClick={handleLogout}
                  className="px-3 py-2 flex items-center text-base font-semibold leading-snug text-white hover:opacity-75" // Larger text size
                >
                  <i className="fas fa-sign-in mr-2" /> logout
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          content
            ? "container flex items-center justify-between border-b-2"
            : "hidden"
        }
      >
        {/* Sử dụng DropdownFilter */}
        <h1 className="text-2xl font-bold mb-4 mt-4">{content}</h1>
        <DropdownFilter onChange={handleFilterChange} />{" "}
      </div>
    </div>
  );
};

export default memo(NavigationAdmin);
