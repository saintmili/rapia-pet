import React from "react";
import { useState } from "react";

import search from "../../assets/search.svg";

import img2 from "../../assets/img2.png";

import "./search-field.styles.css";

export const SearchField = ({ placeholder }) => {
  const products = [
    {
      title: "غذای خشک سگ",
      price: "۱۱۵,۰۰۰ تومان",
      img: "",
      discount: "۹۵,۰۰۰ تومان",
      id: 1,
    },
    {
      title: "تشویقی ونپی Lamb Jerky Slices طعم گوشت بره",
      price: "9999",
      img: img2,
      discount: "",
      id: 2,
    },
    {
      title: "غذای خشک سگ",
      price: "9999",
      img: "",
      discount: "",
      id: 3,
    },
    {
      title: "غذای خشک سگ",
      price: "9999",
      img: "",
      discount: "",
      id: 4,
    },
  ];
  const [inputValue, setInputValue] = useState(null);
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder={placeholder}
        onChange={(e) =>
          setInputValue(e.target.value === "" ? null : e.target.value)
        }
      />
      <div className="search-btn">
        <img src={search} alt="search" />
      </div>

      {products.map((product) =>
        product.title.includes(inputValue) ? (
          <div className="search-result-box">
            <div>
              <div>{product.title}</div>
              <div>{product.price}</div>
            </div>
            <img src={product.img} alt="product"></img>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

