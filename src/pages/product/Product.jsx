import React, { useState, useEffect } from "react";

const Product = () => {
  const mockProducts = [
    {
      id: 1,
      name: "Product A",
      price: 39,
      description: "This is a high-quality product with amazing features.",
      image:
        "https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-1.jpg"
    },
    {
      id: 2,
      name: "Product B",
      price: 59,
      description: "A premium product designed for professionals.",
      image:
        "https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-2.jpg"
    },
    {
      id: 3,
      name: "Product C",
      price: 99,
      description: "The ultimate solution for all your needs.",
      image:
        "https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-3.jpg"
    },
    {
      id: 4,
      name: "Product D",
      price: 79,
      description: "Affordable yet powerful product for everyday use.",
      image:
        "https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-4.jpg"
    }
  ];
  const [products, setProducts] = useState(mockProducts);
  const [successMessage, setSuccessMessage] = useState("");
  // Fetch products from API (simulate fetching from Laravel backend)
  useEffect(() => {
    // Replace this with your actual API call
    const fetchProducts = async () => {
      const response = await fetch("/api/products"); // Example API endpoint
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Handle adding product to cart
  const handleAddToCart = product => {
    console.log("Added to cart:", product);
    setSuccessMessage(`${product.name} added to cart successfully!`);
    // You can add more logic here, like updating a global cart state
  };

  return (
    <section className="blog card">
      <div className="container">
        <div className="text-center flex justify-center items-center">
          <div className="title mb-[128px] max-w-[66%]">
            <h1 className="text-center text-6xl font-light mb-6">
              Our <span className="font-semibold">Pricing</span>
            </h1>
            <p className="text-xl">
              Our pricing isn’t one-size-fits-all. We calculate your
              personalized quote by looking at your specific needs, as well as
              the monthly activity of your website.
            </p>
          </div>
        </div>
        <div className="title mb-[128px]">
          <h1 className="text-center text-3xl">Our Products</h1>
        </div>
        <div className="list-cards">
          <div className="grid grid-cols-2 gap-y-[30px] gap-x-[30px]">
            {products.map(product =>
              <div className="blog-card mb-[60px]" key={product.id}>
                <div className="card relative border border-[#d1d9e6] box-shadowv3 hover:box-shadowv2 rounded-[8.8px]">
                  <div className="card-header">
                    <div className="profile-image box-shadowv2 bg-[#e6e7ee] rounded-[8.8px]">
                      <img
                        className="rounded-[8.8px]"
                        src="https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-1.jpg"
                        alt="avt"
                      />
                    </div>
                  </div>
                  <div className="card-body flex-col justify-center items-center">
                    <div className="flex justify-between items-center">
                      <span className="h6 icon-tertiary small">
                        <span className="fas fa-medal mr-2" />Awards
                      </span>
                      <span className="d-block">
                        <span className="display-1 font-bold text-2xl">
                          <span className="align-top text-xs">$</span>
                          {product.price}
                        </span>
                        <span className="font-small">/ month</span>
                      </span>
                    </div>
                    <h3 className="text-[1.25rem] font-medium card-title mt-3">
                      {product.name}
                    </h3>
                    <p className="card-text mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <a
                        href={`/detail/${product.id}`}
                        className="btn btn-primary hover:shadow-customInset hover:cursor-pointer border border-[#d1d9e6] p-2 inline-block rounded-[8.8px] box-shadow"
                      >
                        <span className="mr-2 btn-inner-icon">
                          <span className="fas fa-eye" />
                        </span>
                        <span className="font-semibold">See detail</span>
                      </a>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-primary hover:shadow-customInset hover:cursor-pointer border border-[#d1d9e6] p-2 inline-block rounded-[8.8px] box-shadow"
                      >
                        <span className="mr-2 btn-inner-icon">
                          <span className="fas fa-cart-plus mr-2" />
                        </span>
                        <span className="addToCart font-semibold">
                          Add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {successMessage &&
        <div className="alert alert-success mt-4 p-4 bg-green-100 text-green-800 rounded">
          {successMessage}
        </div>}
    </section>
  );
};

export default Product;
