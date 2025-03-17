import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../apis/auth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      const response = await apiLogin(data);
      console.log("API Response:", response); // Kiểm tra phản hồi từ API
  
      if (response?.status == 200) {
        navigate("/profile");
        toast.success("Đăng nhập thành công");
      } else {
        throw new Error(response?.message || "Lỗi không xác định");
      }
    } catch (error) {
      console.error("Đăng nhập lỗi:", error);
      toast.error(`Đăng nhập thất bại: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Đăng Nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div>
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              {...register("password", {
                required: "Mật khẩu không được để trống"
              })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.password &&
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Đăng nhập
          </button>
          <p className="text-center text-sm text-gray-600 mt-2">
            Chưa có tài khoản?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Đăng ký ngay
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
