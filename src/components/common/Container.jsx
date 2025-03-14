import React, { useState } from "react";
import "./Underline-home.css";
import { FaChevronRight } from "react-icons/fa";

const Container = () => {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);

  const toggleFirstDropdown = () => {
    setIsOpenFirst(!isOpenFirst);
  };

  const toggleSecondDropdown = () => {
    setIsOpenSecond(!isOpenSecond);
  };

  const toggleThirdDropdown = () => {
    setIsOpenThird(!isOpenThird);
  };

  return <div>Container</div>;
};

export default Container;
