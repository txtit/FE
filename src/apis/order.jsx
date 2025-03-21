import axios from "axios";

// Tạo một instance của Axios với baseURL từ biến môi trường
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Dùng biến môi trường
  withCredentials: true, // Nếu dùng Laravel Sanctum
});

// Các hàm gọi API
export const apiCreateOrder = async (orderData) => {
    try {
      const response = await API.post("/order", orderData); // Gửi POST request đến endpoint "/orders"
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error("Lỗi khi tạo sản phẩm:", error);
      throw error.response?.data || { message: "Lỗi không xác định" };
    }
  };
  export const apiGetAllOrder = async () => {
    try {
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      if (!token) throw new Error("Không tìm thấy token!");
  
      const response = await API.get("/order", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin order:", response);
      return response; // Trả về dữ liệu order
  
    } catch (error) {
      console.error("Lỗi khi lấy order:", error.response?.data || error.message);
      return null; // Trả về null nếu có lỗi
    }
  };

  export const apiGetOrderById = async (id) => {
    try {
      if (!id) throw new Error("Thiếu ID sản phẩm!");
  
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      if (!token) throw new Error("Không tìm thấy token!");
  
      const response = await API.get(`/order/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin order:", response.data);
      return response.data; // Trả về dữ liệu order
  
    } catch (error) {
      console.error("Lỗi khi lấy order:", error.response?.data || error.message);
      return null; // Trả về null nếu có lỗi
    }
  };
  
  
  //   try {
  
  //     const token = localStorage.getItem("token"); // Lấy token từ localStorage
  //     if (!token) throw new Error("Không tìm thấy token!");
  //     const response = await API.put(`/orders/${id}`, {
        
  //       headers: { 
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}` },
  //     });
  
  //     console.log("Thông tin order:", response.data);
  //     return response.data; // Trả về dữ liệu order
  
  //   } catch (error) {
  //     console.error("Lỗi khi lấy order:", error.response?.data || error.message);
  //     return null; // Trả về null nếu có lỗi
  //   }
  // };
  export const apiUpdateOrderById = async (id, updatedData) => {
    try {
      if (!id) throw new Error("Thiếu ID sản phẩm!");
  
      // Lấy token từ localStorage
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Không tìm thấy token!");
  
      // Gửi yêu cầu PUT để cập nhật thông tin người dùng
      const response = await API.put(`/order/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin order sau khi cập nhật:", response.data);
      return response.data; // Trả về dữ liệu order đã cập nhật
  
    } catch (error) {
      console.error("Lỗi khi cập nhật order:", error.response?.data || error.message);
  
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
  
  export const apiDeleteOrder = async (id) => {
    try {
      if (!id) throw new Error("Thiếu ID sản phẩm!");
  
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      if (!token) throw new Error("Không tìm thấy token!");
  
      const response = await API.delete(`/order/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Thông tin order:", response);
      return response; 
  
    } catch (error) {
      console.error("Lỗi khi lấy order:", error.response );
      return null; 
    }
  };