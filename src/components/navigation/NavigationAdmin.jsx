import React, { memo, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaFileExcel } from "react-icons/fa";
// import { useLoading } from "../../main";
import path from "../../utils/path";
import DropdownFilter from "../Filter/RecycleFilter";
import { Button, IconButton } from "@mui/material";
import { apiLogout } from "../../apis/auth";

const NavigationAdmin = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { setLoading } = useLoading();
  const [content, setContent] = useState("");

  useEffect(
    () => {
      // Lấy phần cuối của đường dẫn từ location.pathname
      const pathSegments = location.pathname.split("/"); // Tách URL thành mảng
      const lastSegment = pathSegments[pathSegments.length - 1]; // Phần cuối của đường dẫn

      // Kiểm tra giá trị cuối cùng trong đường dẫn và cập nhật giá trị cho selectedValue
      if (lastSegment === "manage-user") {
        setContent("QUẢN LÝ NGƯỜI DÙNG");
      } else if (lastSegment === "manage-dental") {
        setContent("QUẢN LÝ NHA KHOA");
      } else if (lastSegment === "manage-product") {
        setContent("QUẢN LÝ SẢN PHẨM");
      } else {
        setContent("");
      }
    },
    [location]
  );

  const handleFilterChange = value => {
    if (value === "user") {
      navigate("/admin/manage-user"); // Điều hướng đến trang quản lý người dùng
    } else if (value === "dental") {
      // Điều hướng đến trang quản lý nha khoa
      navigate("/admin/manage-dental");
    } else if (value === "product") {
      // Điều hướng đến trang quản lý sản phẩm
      navigate("/admin/manage-product");
    }
  };

  console.log(content);
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

  const handleOpenProduct = e => {
    // Clear session data
    setLoading(true);
    // localStorage.removeItem('user');
    // Redirect to the login page
    setTimeout(() => {
      navigate("/admin/create-product");
      setLoading(false);
    }, 1000);
    // Optionally, display a toast notification
  };
  const handleOpenCreate = e => {
    navigate("/admin/addUser");
  };
  const handleOpenCreateProduct = e => {
    navigate("/admin/addProduct");
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
  const handleOpenHome = e => {
    // Clear session data
    setLoading(true);
    // localStorage.removeItem('user');

    setTimeout(() => {
      setLoading(false);

      // if (location.pathname === `${path.ADMIN}/${path.MANAGE_USER}`)
      if (location.pathname === "/admin/manage-user") {
        window.location.reload();
      } else {
        navigate("/admin/manage-user");
        // navigate(`${path.ADMIN}/${path.MANAGE_USER}`);
      }
    }, 1000);
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
              <div className="nav-item">
                <span
                  onClick={handleOpenCreate}
                  className="px-3 py-2 flex items-center text-base font-semibold  leading-snug text-white hover:opacity-75" // Larger text size
                >
                  <i className="fa-solid fa-user-plus mr-2" /> Add User
                </span>
              </div>
              {/* AddProduct  */}
              <div className="nav-item">
                <span
                  onClick={handleOpenCreateProduct}
                  className="px-3 py-2 flex items-center text-base font-semibold  leading-snug text-white hover:opacity-75" // Larger text size
                >
                  <i className="fa-solid fa-user-plus mr-2" /> Add Product
                </span>
              </div>

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
        <h2
          style={{
            textAlign: "start",
            fontFamily: "system-ui",
            color: "#333",
            fontSize: "50px",
            marginLeft: "10px",
            fontWeight: 600,
            minWidth: "550px",
            // borderBottom: "2px solid #ccc", // Adds a 2px solid border with a light gray color
            paddingBottom: "10px"
          }}
        >
          {content}
        </h2>
        <DropdownFilter onChange={handleFilterChange} />{" "}
      </div>
    </div>
  );
};

export default memo(NavigationAdmin);
