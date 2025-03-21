import axios from "axios";

// Tạo một instance của Axios với baseURL từ biến môi trường
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Dùng biến môi trường
  withCredentials: true, // Nếu dùng Laravel Sanctum
});

export const apiUpdateUser = async (data) => {
  try {
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    if (!token) throw new Error("Không tìm thấy token!");

    const response = await API.put("/me", data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("Thông tin user:", response);
    return response; // Trả về dữ liệu user

  } catch (error) {
    console.error("Lỗi khi lấy user:", error.response?.user || error.message);
    return 'helo'; // Trả về null nếu có lỗi
  }
};
// Các hàm gọi API
  export const apiGetUser = async () => {
    try {
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      if (!token) throw new Error("Không tìm thấy token!");
  
      const response = await API.get("/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin user:", response);
      return response.data; // Trả về dữ liệu user
  
    } catch (error) {
      console.error("Lỗi khi lấy user:", error.response?.data || error.message);
      return null; // Trả về null nếu có lỗi
    }
  };

  export const apiGetAllUser = async () => {
    try {
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      if (!token) throw new Error("Không tìm thấy token!");
  
      const response = await API.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin user:", response);
      return response; // Trả về dữ liệu user
  
    } catch (error) {
      console.error("Lỗi khi lấy user:", error.response?.data || error.message);
      return null; // Trả về null nếu có lỗi
    }
  };

  export const apiGetUserById = async (id) => {
    try {
      if (!id) throw new Error("Thiếu ID người dùng!");
  
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      if (!token) throw new Error("Không tìm thấy token!");
  
      const response = await API.get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin user:", response.data);
      return response.data; // Trả về dữ liệu user
  
    } catch (error) {
      console.error("Lỗi khi lấy user:", error.response?.data || error.message);
      return null; // Trả về null nếu có lỗi
    }
  };
  
  
  //   try {
  
  //     const token = localStorage.getItem("token"); // Lấy token từ localStorage
  //     if (!token) throw new Error("Không tìm thấy token!");
  //     const response = await API.put(`/users/${id}`, {
        
  //       headers: { 
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}` },
  //     });
  
  //     console.log("Thông tin user:", response.data);
  //     return response.data; // Trả về dữ liệu user
  
  //   } catch (error) {
  //     console.error("Lỗi khi lấy user:", error.response?.data || error.message);
  //     return null; // Trả về null nếu có lỗi
  //   }
  // };
  export const apiUpdateUserById = async (id, updatedData) => {
    try {
      if (!id) throw new Error("Thiếu ID người dùng!");
  
      // Lấy token từ localStorage
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Không tìm thấy token!");
  
      // Gửi yêu cầu PUT để cập nhật thông tin người dùng
      const response = await API.put(`/users/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin user sau khi cập nhật:", response.data);
      return response.data; // Trả về dữ liệu user đã cập nhật
  
    } catch (error) {
      console.error("Lỗi khi cập nhật user:", error.response?.data || error.message);
  
      // Xử lý lỗi 401 (Unauthorized)
      if (error.response?.status === 401) {
        console.error("Lỗi xác thực: Token không hợp lệ hoặc đã hết hạn.");
        // Xóa token hết hạn và yêu cầu người dùng đăng nhập lại
        localStorage.removeItem("token");
        window.location.href = "/login"; // Chuyển hướng đến trang đăng nhập
      }
  
      throw error; // Ném lỗi để xử lý ở phía gọi hàm
    }
  };
  
  export const apiDeleteUser = async (id) => {
    try {
      if (!id) throw new Error("Thiếu ID người dùng!");
  
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      if (!token) throw new Error("Không tìm thấy token!");
  
      const response = await API.delete(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin user:", response);
      return response; 
  
    } catch (error) {
      console.error("Lỗi khi lấy user:", error.response );
      return null; 
    }
  };