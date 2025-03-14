import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiRegister } from "../../apis/auth";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const response = await apiRegister(data);
    console.log(response);
  };

  // Lấy giá trị mật khẩu để kiểm tra nhập lại mật khẩu
  const password = watch("password");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Đăng Ký</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Họ và Tên */}
          <div>
            <label className="block text-gray-700">Họ và Tên</label>
            <input
              type="text"
              {...register("name", { required: "Tên không được để trống" })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.name &&
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email không được để trống" })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.email &&
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>}
          </div>

          {/* Mật khẩu */}
          <div>
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              {...register("password", {
                required: "Mật khẩu không được để trống",
                minLength: { value: 6, message: "Mật khẩu ít nhất 6 ký tự" }
              })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.password &&
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>}
          </div>

          {/* Nhập lại mật khẩu */}
          <div>
            <label className="block text-gray-700">Nhập lại mật khẩu</label>
            <input
              type="password"
              {...register("password_confirmation", {
                required: "Vui lòng nhập lại mật khẩu",
                validate: value =>
                  value === password || "Mật khẩu nhập lại không khớp"
              })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.password_confirmation &&
              <p className="text-red-500 text-sm">
                {errors.password_confirmation.message}
              </p>}
          </div>

          {/* Nút đăng ký */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Đăng ký
          </button>

          {/* Điều hướng đến trang đăng nhập */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Đã có tài khoản?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Đăng nhập ngay
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
