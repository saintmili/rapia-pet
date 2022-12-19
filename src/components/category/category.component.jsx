import React from "react";

import ProductItem from "../product-item";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/imgs/img7.svg";

import "./category.styles.css";

export const Category = (props) => {
  const CATEGORY_A = [
    {
      title: "انواع غذاها",
      img: img1,
      id: 1,
    },
    {
      title: "تشویقی",
      img: img2,
      id: 2,
    },
    {
      title: "توپ بازی",
      img: img3,
      id: 3,
    },
    {
      title: "لوازم بهداشتی سگ",
      img: img4,
      id: 4,
    },
    {
      title: "تمرینی و آموزشی",
      img: img5,
      id: 5,
    },
    {
      title: "وسایل مسافرت",
      img: img6,
      id: 6,
    },
  ];
  const CATEGORY_B = [
    {
      title: "قلاده کمری",
      img: img7,
      id: 1,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 2,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 3,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 4,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 5,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 6,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 7,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 8,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 9,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 10,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 11,
    },
    {
      title: "قلاده کمری",
      img: img7,
      id: 12,
    },
  ];
  const LAST_PRODUCTS = [
    {
      title: "غذای خشک سگ",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "9999",
      discount: "",
      id: 1,
    },
    {
      title: "غذای خشک سگ",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "9999",
      discount: "",
      id: 2,
    },
    {
      title: "غذای خشک سگ",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "9999",
      discount: "",
      id: 3,
    },
    {
      title: "غذای خشک سگ",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "9999",
      discount: "",
      id: 4,
    },
  ];
  return (
    <div className="category">
      {props.title ? <div className="category-title">{props.title}</div> : ""}
      <div className="category-items">
        {props.type === "a"
          ? CATEGORY_A.map((category) => (
              <div className="category-circular" key={category.id}>
                <div className="category-item-img">
                  <img src={category.img} alt="pet" />
                </div>
                <div className="category-item-title">{category.title}</div>
              </div>
            ))
          : props.type === "b"
          ? CATEGORY_B.map((category) => (
              <div className="category-square" key={category.id}>
                <div className="category-item-img">
                  <img src={category.img} alt="pet" />
                </div>
                <div className="category-item-title">{category.title}</div>
              </div>
            ))
          : props.type === "c"
          ? LAST_PRODUCTS.map((product) => (
              <div className="last-products-item" key={product.id}>
                <ProductItem props={product} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Category;

