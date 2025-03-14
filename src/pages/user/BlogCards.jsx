import React from "react";

const BlogCards = () => {
  return (
    <section className="blog card">
      {/* <div className="line-clamp-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
      </div> */}
      <div className="container">
        <div className="title mb-[128px]">
          <h2 className="text-center">Blog Cards</h2>
        </div>
        <div className="list-cards">
          <div className="grid grid-cols-3 gap-y-[30px] gap-x-[30px]">
            {/* Card 1 */}
            <div className="blog-card mb-[60px]">
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
                  <span className="h6 icon-tertiary small">
                    <span className="fas fa-medal mr-2" />Awards
                  </span>
                  <h3 className="text-[1.25rem] font-medium card-title mt-3">
                    We partnered up with Google
                  </h3>
                  <p className="card-text mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary hover:shadow-customInset hover:cursor-pointer border border-[#d1d9e6] p-2 inline-block rounded-[8.8px] box-shadow"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="blog-card mb-[60px]">
              <div className="card relative box-shadowv3 hover:box-shadowv2 rounded-[8.8px]">
                <div className="card-header p-4">
                  <div className="profile-image box-shadowv2 bg-[#e6e7ee] rounded-[8.8px]">
                    <img
                      className="rounded-[8.8px]"
                      src="https://demo.themesberg.com/neumorphism-ui/assets/img/blog/blog-article-2.jpg"
                      alt="avt"
                    />
                  </div>
                </div>
                <div className="card-body flex-col justify-center items-center !pt-2">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <a href="#">
                        <img
                          className="w-[1.5rem] h-[1.5rem] rounded-[50%] mr-2"
                          src="https://demo.themesberg.com/neumorphism-ui/assets/img/team/profile-picture-2.jpg"
                          alt=""
                        />
                      </a>
                      Jo J. Moore
                    </div>
                    <span className="small text-[80%]">
                      <span className="far fa-calendar-alt mr-2" />15 March 2020
                    </span>
                  </div>
                  <h3 className="text-[1.25rem] font-medium card-title mt-3">
                    We partnered up with Google
                  </h3>
                  <p className="card-text mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary border border-[#d1d9e6] p-2 inline-block rounded-[8.8px] box-shadow hover:shadow-customInset hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="profile-card mb-[60px]">
              <div className="card relative border border-[#d1d9e6] box-shadowv3 hover:shadow-customInset hover:cursor-pointer rounded-[8.8px]">
                <div className="card-header px-6 py-5 text-center">
                  {/* <div className="profile-image box-shadowv2 bg-[#e6e7ee] border border-[#d1d9e6] -mt-[80px] rounded-circle p-4 w-[160px] h-[160px]">
                      <img className="rounded-circle" src="https://demo.themesberg.com/neumorphism-ui/assets/img/team/profile-picture-1.jpg" alt="avt" />
                  </div> */}
                  <span className="small text-[80%]">
                    <span className="far fa-calendar-alt mr-2" />15 March 2020
                  </span>
                </div>
                <div className="card-body flex-col justify-center items-center text-center">
                  <h3 className="text-[1.25rem] font-medium card-title mt-3">
                    We partnered up with Google
                  </h3>
                  <p className="card-text mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary border border-[#d1d9e6] p-2 inline-block rounded-[8.8px] box-shadow hover:shadow-customInset hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
                <div className="card-footer flex justify-center items-center p-5">
                  <a href="#">
                    <img
                      className="w-[1.5rem] h-[1.5rem] rounded-[50%] mr-2"
                      src="https://demo.themesberg.com/neumorphism-ui/assets/img/team/profile-picture-2.jpg"
                      alt=""
                    />
                  </a>
                  Jo J. Moore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
