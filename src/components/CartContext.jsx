import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Lấy giỏ hàng từ localStorage khi component được render
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = product => {
    const updatedCart = [...cartItems];
    const existingProduct = updatedCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = productId => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartItems.map(
      item => (item.id === productId ? { ...item, quantity } : item)
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // Hàm xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
