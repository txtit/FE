import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { apiGetUser } from "../../apis/user";

const ProfileCard = () => {
  // State để quản lý trạng thái disabled của các input
  const [isEditable, setIsEditable] = useState(false);
  const [User, setUser] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const data = await apiGetUser();
      console.log(data.name);
      if (data) {
        setUser([data]);
        setFormData(data)
      }
    };
    fetchUser();
  }, []);

   // Xử lý khi nhấn "Update"
   const handleUpdateClick = () => {
    setIsEditable(true);
  };

  // Xử lý khi nhấn "Hủy"
  const handleCancelClick = () => {
    setIsEditable(false);
    setFormData(User[0] || {}); // Khôi phục lại dữ liệu ban đầu
  };

  // Xử lý khi nhấn "Lưu"
  const handleSaveClick = () => {
    console.log("Lưu dữ liệu:", formData);
    setUser(formData); // Cập nhật lại user với dữ liệu mới
    setIsEditable(false);
  };

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6e7ee]">
      {User.length > 0
        ? User.map(user =>
            <div className="bg-[#e6e7ee] rounded-2xl shadow-lg overflow-hidden w-96 box-shadowv3">
              {/* Ảnh nền */}

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Cover"
                  className="w-full !h-36 object-cover"
                />
                {/* Ảnh đại diện */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    alt="Profile"
                    className="w-28 h-28 rounded-full border-4 border-[#e6e7ee] shadow-md"
                  />
                </div>
              </div>

              {/* Nội dung */}
              <div className="text-center !mt-14 p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.name}
                </h2>
                <p className="text-gray-500 text-sm">Freelance Web Designer</p>

                {/* Thống kê */}
                <div className="flex justify-around !mt-6 text-gray-700">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">2k</span>
                    <span className="text-xs text-gray-500">Posts</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">10k</span>
                    <span className="text-xs text-gray-500">Followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">15</span>
                    <span className="text-xs text-gray-500">Projects</span>
                  </div>
                </div>

                {/* Input cho thông tin khách hàng */}
                <div className="space-y-4 !mt-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 text-left"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Nhập email của bạn"
                      onChange={handleInputChange}
                      value={formData.email}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      readOnly={!isEditable} // Disable nếu isEditable là false
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 text-left"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Nhập số điện thoại của bạn"
                      onChange={handleInputChange}
                      value={formData.phone || '0988786071'}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      readOnly={!isEditable} // Disable nếu isEditable là false
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 text-left"
                    >
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Nhập địa chỉ của bạn"
                      value={formData.address|| "Thu duc, VietNam"}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      readOnly={!isEditable} // Disable nếu isEditable là false
                    />
                  </div>
              
                  
                </div>

                {/* Nút Update */}
                
                <div className="!mt-6 flex gap-2">
              {isEditable ? (
                <>
                  <button
                    onClick={handleSaveClick}
                    className="w-1/2 !bg-green-600 !text-white !font-medium !py-2 rounded-lg !shadow-md hover:!bg-green-700 transition !duration-300"
                  >
                    Lưu
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="w-1/2 !bg-red-600 !text-white !font-medium !py-2 rounded-lg !shadow-md hover:!bg-red-700 transition !duration-300"
                  >
                    Hủy
                  </button>
                </>
              ) : (
                <button
                  onClick={handleUpdateClick}
                  className="w-full !bg-blue-600 !text-white !font-medium !py-2 rounded-lg !shadow-md hover:!bg-blue-700 transition !duration-300"
                >
                  Update
                </button>
              )}
            </div>
              </div>
            </div>
          )
        : <p>Đang tải...</p>}
    </div>
  );
};

export default ProfileCard;
