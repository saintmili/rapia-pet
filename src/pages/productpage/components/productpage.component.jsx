import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/productpage.styles.css";
import CustomButton from "@/common/components/CustomButton";
import { getProductBySlug } from "../../../api/products.api";
import ProductReview from "./product-review.component.jsx";
import Category from "../../../components/category";

const ProductPage = () => {
  const menuItems = [
    {
      id: 1,
      name: "بررسی محصول",
    },
    {
      id: 2,
      name: "بررسی ویدیویی",
    },
    {
      id: 3,
      name: "ویژگی ها",
    },
    {
      id: 4,
      name: "ترکیبات محصول",
    },
    {
      id: 5,
      name: "نظرات کاربران",
    },
    {
      id: 6,
      name: "پرسش و پاسخ",
    },
  ];
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);

  useEffect(() => {
    if (!product) {
      getProductBySlug(params.productSlug).then((data) => setProduct(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMenuSwitch = () => {
    switch (selectedMenu.id) {
      case 1:
        return <ProductReview />;
      default:
        return;
    }
  };

  return (
    <div className="product-page">
      <div className="product-page-container">
        <div className="game-page-header">
          <div className="product-page-header-img-container"></div>
          <div className="product-page-header-summarize">
            <div className="product-page-header-boardcrump">
              خانه/غذا سگ/غذا خشک سگ
            </div>
            <div className="product-page-header-title">
              {product ? product.title : null}
            </div>
            <div className="product-page-header-review">
              <div className="product-page-header-review-category">
                <div className="product-page-header-review-category-img"></div>
                <div className="product-page-header-review-category-txt">
                  غذا خشک سگ
                </div>
              </div>
              <div className="product-page-header-review-category-stars"></div>
              <div className="product-page-header-review-category-comments"></div>
            </div>
            <div className="product-page-header-product-attributes">
              <div className="product-page-header-product-attributes-title">
                ویژگی های محصول:
              </div>
              <div className="product-page-header-product-attributes-attribute">
                1- مناسب توله
              </div>
              <div className="product-page-header-product-attributes-attribute">
                2- دارای فیبر و کالری
              </div>
              <div className="product-page-header-product-attributes-attribute">
                3- دارای لاکتوز
              </div>
              <div className="product-page-header-product-attributes-attribute">
                4- سن 2 تا 15 ماه
              </div>
            </div>
          </div>
          <div className="product-page-header-cart">
            <div className="product-page-header-cart-title">
              چقدر به سگم غذا بدم؟
            </div>
            <div className="product-page-header-cart-container">
              <div className="product-page-header-cart-container-weight">
                <div className="product-page-header-cart-container-weight-title">
                  وزن:
                </div>
                <div className="product-page-header-cart-container-weight-item"></div>
                <div className="product-page-header-cart-container-weight-item"></div>
                <div className="product-page-header-cart-container-weight-item"></div>
                <div className="product-page-header-cart-container-weight-item"></div>
              </div>
              <div className="product-page-header-cart-container-price">
                {product ? product.price : null}
              </div>
              <div className="product-page-header-cart-container-quantity">
                تعداد:
              </div>
              <div className="product-page-header-cart-container-addtocart">
                <CustomButton
                  backgroundColor="var(--color-blue-primary)"
                  color="var(--color-white-primary)"
                >
                  افزودن به سبد خرید
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="product-page-menu">
          <div className="product-page-menu-items">
            {menuItems.map((menu) => (
              <div
                className="product-page-menu-item"
                key={menu.id}
                onClick={() => setSelectedMenu(menu)}
              >
                <span className="product-page-menu-item-icon"></span>
                <span className="product-page-menu-item-text">{menu.name}</span>
              </div>
            ))}
          </div>
          <div className="product-page-menu-container">
            {renderMenuSwitch()}
          </div>
        </div>
        <div className="product-page-banner"></div>
        <div className="related-products">
          <Category type="c" title="محصولات مرتبط" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

