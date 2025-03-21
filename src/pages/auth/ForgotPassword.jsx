import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiForgotPassword } from "../../apis/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      // Gọi API để gửi yêu cầu đặt lại mật khẩu
      const response = await apiForgotPassword(data);
      console.log(response);
      console.log("Yêu cầu đặt lại mật khẩu:", data);
      toast.success(
        "Yêu cầu đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn."
      );
      navigate("/login"); // Chuyển hướng về trang đăng nhập sau khi gửi yêu cầu thành công
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Quên Mật Khẩu</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email không được để trống" })}
              className="w-full px-4 py-2 border rounded-md"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email &&
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Gửi Yêu Cầu
          </button>

          <p className="text-center text-sm text-gray-600 mt-2">
            Quay lại trang{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
