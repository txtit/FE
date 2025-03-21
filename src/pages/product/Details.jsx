import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { apiGetProductById } from "../../apis/product";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../../components/CartContext";

const Details = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = product => {
    addToCart(product); // Sử dụng hàm addToCart từ CartContext
    toast.success("Thêm sản phẩm vào giỏ hàng thành công!");
  };
  useEffect(
    () => {
      const fetchProducts = async () => {
        try {
          const data = await apiGetProductById(id);
          console.log(data);
          if (data) {
            setProduct(data);
          }
        } catch (error) {
          toast.error("Không thể tải dữ liệu sản phẩm!");
        } finally {
        }
      };
      fetchProducts();
    },
    [id]
  );

  return (
    <section className="detail">
      <div className="container">
        <div className="row items-center justify-content-around">
          <div className="col-md-6">
            <div className="card">
              <img
                className="organic-radius box-shadowv3 border border-[rgba(243,247,250,0.05)] p-4"
                src={product.image}
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-xl-5 flex-[0_0_41.67%] max-w-[41.67%]">
            <h2 className="text-[2.5rem] mb-6 font-medium text-[#31344b] text-start">
              {product.name}
            </h2>
            <p className="text-xl font-light mb-2">
              Price : {" "}
              <span className="font-bold mb-5">{product.price} vnd</span> <br />{" "}
              Stock : <span className="font-bold mb-5">
                {product.stock}{" "}
              </span>{" "}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Thêm vào giỏ hàng
            </button>
            <p className="text-xl font-light mb-6">
              <br /> Themesberg is an experienced and passionate group of
              designers, developers, project managers, writers and artists.
              Every client we work with becomes a part of the team. Together we
              face the challenges and celebrate the victories.
            </p>
            <p className="text-xl font-light mb-6">
              {product.description}
            </p>
            <img
              src="https://demo.themesberg.com/neumorphism-ui/assets/img/signature.svg"
              alt="signature"
              className="mt-4"
              width="150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
