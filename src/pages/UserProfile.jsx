import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiGetUser, apiUpdateUser } from "../apis/user";

const UserProfile = () => {
  // const [user, setUser] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: "Neil Sims",
    role: "Co-Founder Themesberg",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  const handleChange = e => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(tempUser);
    setIsEditing(false);
  };
  useEffect(() => {
    apiGetUser()
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Lỗi khi lấy thông tin:", err);
        setLoading(false);
      });
  }, []);

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      await apiUpdateUser(user);
      toast.success("Cập nhật thành công!");
    } catch (err) {
      toast.error("Lỗi khi cập nhật!");
      console.error(err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500" />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-xl shadow-neumorphism text-center w-80">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
          <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
        </div>

        {isEditing ? (
          <div className="mt-4">
            <input
              type="text"
              name="name"
              value={tempUser.name}
              onChange={handleChange}
              className="border p-2 w-full rounded-md shadow-sm"
            />
            <input
              type="text"
              name="role"
              value={tempUser.role}
              onChange={handleChange}
              className="border p-2 w-full rounded-md shadow-sm mt-2"
            />
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 mt-3 rounded-md shadow-md hover:bg-green-600"
            >
              Lưu
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{user.name}</h3>
            <p className="text-gray-500">{user.role}</p>
            <div className="flex justify-center gap-3 mt-3">
              <i className="fab fa-facebook text-blue-500 cursor-pointer"></i>
              <i className="fab fa-twitter text-blue-400 cursor-pointer"></i>
              <i className="fab fa-github text-gray-600 cursor-pointer"></i>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md shadow-md hover:bg-blue-600"
            >
              Chỉnh sửa
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
