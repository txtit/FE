import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logov2.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { navigations } from "../../utils/constants";
import clsx from "clsx";
import withRouter from "../../hocs/withRouter";
import { IoMdMenu } from "react-icons/io";

const Navigation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null); // Tham chiếu đến phần tử menu
  const buttonRef = useRef(null); // Tham chiếu đến nút mở menu
  const [activeRoute, setActiveRoute] = useState();
  const [activeIndex, setActiveIndex] = useState(1);
  const location = useLocation(); // Lấy URL hiện tại
  // Cập nhật activeIndex khi URL thay đổi
  useEffect(
    () => {
      const currentPath = location.pathname;
      console.log(currentPath);
      const index = navigations.findIndex(el => el.path === currentPath);
      console.log(index);
      setActiveIndex(index); // Cập nhật chỉ mục dựa trên URL
    },
    [location, navigations]
  );
  console.log(activeIndex);

  const handleToggel = () => {
    setToggle(!toggle);
  };

  useEffect(
    () => {
      setToggle(false);
    },
    [width]
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      // console.log(window.innerWidth); // Log the current width
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Thêm sự kiện mousedown để phát hiện nhấp chuột bên ngoài menu
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={clsx(
        "font-helvetica shadow-md w-full border-b-[1px] border-[#A2A2A2] flex fixed bg-white z-50"
      )}
    >
      <div
        className={clsx(
          "container h-[92px] flex lg:justify-between justify-start lg:items-center items-start lg:flex-row gap-8 ",
          toggle ? "h-full flex-col w-full my-3" : "items-center"
        )}
        ref={menuRef} // Tham chiếu đến phần tử menu
      >
        <Link to={`/`}>
          <img
            alt="logo"
            src={logo}
            className="w-[186px] h-[60px] object-cover "
          />
        </Link>

        <div
          className={clsx(
            "lg:flex gap-8 text-base justify-center w-auto",
            toggle
              ? "flex flex-col items-start justify-center gap-4 h-full w-full ml-4"
              : "hidden flex-row w-auto"
          )}
        >
          {navigations.map(el =>
            // <NavLink
            //   className={clsx("inline", el.text === "SẢN PHẨM" && "font-bold")}
            //   to={el.path}
            //   key={el.id}
            // >
            //   <span className="lg:inline-block">
            //     {el.text}
            //   </span>
            // </NavLink>
            <NavLink
              className={clsx("inline", activeIndex === el.id && "font-bold")}
              to={el.path}
              key={el.id}
            >
              <span className="lg:inline-block">
                {el.text}
              </span>
            </NavLink>
          )}
        </div>
      </div>
      <span
        className="flex items-start justify-center lg:hidden mr-4 mt-4 cursor-pointer"
        ref={buttonRef} // Tham chiếu đến nút mở menu
      >
        <IoMdMenu onClick={handleToggel} size={36} />
      </span>
    </div>
  );
};

export default withRouter(Navigation);
