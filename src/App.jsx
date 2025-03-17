import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./pages/Navbar";
import AdminPage from "./pages/admin/AdminPage";
import BlogCards from "./pages/user/BlogCards";
import "./assets/app.css";
import ProfileCards from "./pages/user/ProfileCards";
import Product from "./pages/product/Product";
import BlogSection from "./pages/product/BlogSection";
import Details from "./pages/product/Details";
import Carsouel from "./hoooks/Carsouel";
import Footer from "./pages/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import NavigationAdmin from "./components/navigation/NavigationAdmin";
import ManagerUser from "./pages/admin/user/ManagerUser";
import CreateUser from "./pages/admin/user/CreateUser";
import UpdateUser from "./pages/admin/user/UpdateUser";
import ManageProduct from "./pages/admin/product/ManagerProduct";
import CreateProduct from "./pages/admin/product/CreateProduct";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import ProtectedAuth from "./components/ProtectedAuth";

// Layout cho các trang thông thường (user)
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar/>}
      <div className="p-6">{children}</div>
      {!hideNavbar && <Footer />}
    </>
  );
};

// Layout cho các trang admin
const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavigationAdmin />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes cho người dùng thông thường */}
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<ProtectedAuth><ProfileCards /></ProtectedAuth> } />
                <Route path="/product" element={<ProtectedAuth><Product /></ProtectedAuth>} />
                <Route
                  path="/detail"
                  element={
                    <>
                      <BlogSection />
                      <Details />
                      <Carsouel />
                    </>
                  }
                />
                <Route path="/" element={<BlogCards />} />
              </Routes>
            </Layout>
          }
        />

        {/* Routes cho admin */}
        <Route path="/admin/*"element={<AdminLayout>
              <Routes>
                <Route path="manageUser"element={ <ProtectedRoute><ManagerUser /> </ProtectedRoute>}/>
                <Route path="addUser" element={ <ProtectedRoute> <CreateUser /> </ProtectedRoute>} />
                <Route path="updateUser/:id" element={ <ProtectedRoute> <UpdateUser/> </ProtectedRoute>} />
                <Route path="manageProduct"element={ <ProtectedRoute><ManageProduct /> </ProtectedRoute>}/>
                <Route path="addProduct" element={ <ProtectedRoute> <CreateProduct /> </ProtectedRoute>} />
                <Route path="updateProduct/:id" element={ <ProtectedRoute> <UpdateProduct/> </ProtectedRoute>} />
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>

      {/* ToastContainer để hiển thị thông báo */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </BrowserRouter>
  );
};

export default App;
