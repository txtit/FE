import axios from "axios";

// Tạo một instance của Axios với baseURL từ biến môi trường
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Dùng biến môi trường
  withCredentials: true, // Nếu dùng Laravel Sanctum
});

// them Interceptor để tự đông gán token vào tất cả request 
  API.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error)
  });

// Các hàm gọi API
export const apiRegister = (data) => API.post("/register", data);
export const apiLogin = async (data)  => {
  try {
    const respone = await API.post("/login", data);
    if(respone.data.access_token){
      localStorage.setItem("token", respone.data.access_token);
      localStorage.setItem("role", respone.data.role);
      localStorage.setItem("name",respone.data.name );
    }
    return respone;
  }catch (error){
    console.log(error);
    return Promise.reject(error.respone || error);
  }
};
export const apiLogout = async () => {
  try {
    const response = await API.post("/logout", {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data); // Log phản hồi từ server
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Lỗi khi logout:", error.response?.data || error.message);
  }
};
export const apiForgotPassword = (data) => API.post("/forgot-password", data);
export const apiResetPassword = (data) => API.post("/reset-password", data);
