import React from "react";

const Footer = () => {
  return (
    <footer className="leading-[25.6px] text-[#31344b] h-[556px] bg-[#e6e7ee] border-t border-[#d1d9e6] py-[130px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          {/* Column 1 */}
          <div className="w-[33.3%] px-[15px] leading-[25.6px]">
            <p className="w-full text-left mb-4 text-[#44476a] font-light text-[16px]">
              <strong className="font-semibold">Neumorphism UI PRO</strong> is a
              premium Bootstrap UI Kit built based on the newest design trend
              called Neumorphism.
            </p>
            <ul className="flex justify-start">
              <li className="relative hover:shadow-customInset hover:cursor-pointer hover:border hover:border-[#e6e7ee] mr-2 w-[41px] h-[41px] flex items-center justify-center rounded-[32px] bg-[#e6e7ee] box-shadow border border-[#d1d9e6]">
                <a href="https://twitter.com/themesberg">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="relative hover:shadow hover:shadow-customInset hover:cursor-pointer hover:border hover:border-[#e6e7ee] mr-2 w-[41px] h-[41px] flex items-center justify-center rounded-[32px] bg-[#e6e7ee] box-shadow border border-[#d1d9e6]">
                <a href="https://facebook.com/themesberg">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="relative hover:shadow-customInset hover:cursor-pointer hover:border hover:border-[#e6e7ee] mr-2 w-[41px] h-[41px] flex items-center justify-center rounded-[32px] bg-[#e6e7ee] box-shadow border border-[#d1d9e6]">
                <a href="https://github.com/themesberg">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="relative hover:shadow-customInset hover:cursor-pointer hover:border hover:border-[#e6e7ee] mr-2 w-[41px] h-[41px] flex items-center justify-center rounded-[32px] bg-[#e6e7ee] box-shadow border border-[#d1d9e6]">
                <a href="https://dribbble.com/themesberg">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="min-w-[16.7%] px-[15px] font-normal leading-[25.6px]">
            <h5 className="text-xl mb-2">Themesberg</h5>
            <ul className="flex flex-col gap-1">
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">Blog</a>
              </li>
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">Products</a>
              </li>
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">About Us</a>
              </li>
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="font-normal min-w-[16.7%] px-[15px]">
            <h5 className="text-xl mb-2">Other</h5>
            <ul className="flex flex-col gap-1">
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">
                  Docs{" "}
                  <span className="leading-[50px] rounded-[8.8px] w-[40px] h-[22px] inline-flex justify-center items-center rounded-md px-2 py-1 text-xs font-semibold ring-1 ring-inset border border-[#d1d9e6] box-shadowv2">
                    V1.0
                  </span>
                </a>
              </li>
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">Changelog</a>
              </li>
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">License</a>
              </li>
              <li className="hover:cursor-pointer hover:shadow-customInset rounded-[8.8px] -ml-[5px] h-[42px] w-[165px] p-2">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-[33.3%] px-[15px] font-normal">
            <h5 className="text-xl">Subscribe</h5>
            <p className="font-light text-sm mt-2 mb-4">
              Join our mailing list. We write rarely, but only the best content.
            </p>
            <form className="font-normal">
              <div className="mb-2">
                <div className="col-12">
                  <input
                    className="mb-2 w-full h-[44px] rounded-[8.8px] box-shadowv2 px-3 py-[9.6px] text-start placeholder:p-[3] bg-[#e6e7ee] border border-[#d1d9e6]"
                    type="email"
                    placeholder="example@company.com"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="w-full h-[44px] border border-[#d1d9e6] rounded-[8.8px] box-shadow hover:shadow-customInset"
                    data-loading-text="Sending"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
            <p className="font-light text-sm">
              We’ll never share your details. See our{" "}
              <a className="text-black font-normal text-sm" href="#">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 my-[48px] border border-[#d1d9e6] font-light h-0" />

        {/* Footer Bottom */}
        <div className="flex flex-col text-sm font-normal">
          <div className="text-center mb-4">
            <a href="#">
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
          <div>
            <p className="text-center">
              Copyright © Themesberg <span className="current-year">2024</span>.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
