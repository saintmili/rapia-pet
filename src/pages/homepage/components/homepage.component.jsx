import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import Category from "../../../components/category";
import Offer from "../../../components/offer";
import CustomButton from "@/common/components/CustomButton";
import pou from "../../../assets/pou.svg";
import product from "../../../assets/products.svg";
import vet from "../../../assets/vet.svg";
import img1 from "../../../assets/img1.png";

import "../styles/homepage.styles.css";

const discounts = [
  {
    title: "غذا سگ",
    items: [
      {
        title: "غذای خشک سگ",
        img: img1,
        price: "۱۱۵,۰۰۰ تومان",
        discount: "۹۵,۰۰۰ تومان",
        id: 1,
      },
      {
        title: "تشویقی ونپی Lamb Jerky Slices طعم گوشت بره",
        img: img1,
        price: "9999",
        discount: "",
        id: 2,
      },
      {
        title: "غذای خشک سگ",
        img: img1,
        price: "9999",
        discount: "",
        id: 3,
      },
      {
        title: "غذای خشک سگ",
        img: img1,
        price: "9999",
        discount: "",
        id: 4,
      },
    ],
    id: 1,
  },
  {
    title: "قلاده سگ",
    items: [
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
    ],
    id: 2,
  },
  {
    title: "اسباب بازی سگ",
    items: [
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
    ],
    id: 3,
  },
];

const newProducts = [
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

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <section className="section-1">
          <div className="sec-1">
            <div className="section-1-title">
              <h1>
                رآبیا<span>پت</span>:
              </h1>
              <h2>
                <span>دامپزشکی</span> و <span>پت شاپ</span> آنلاین
              </h2>
            </div>
            <div className="section-1-content">
              <p>
                لوازم ضروری و غیر ضروری سگ رو با بهترین قیمت در رآبیاپت پیدا
                کنید و بخرید
              </p>
              <div className="section-1-btns">
                <Link to="/products" style={{ textDecoration: "none" }}>
                  <CustomButton
                    backgroundColor="var(--color-blue-primary)"
                    color="var(--color-white-original)"
                    overBackgroundColor="red"
                  >
                    <img
                      src={product}
                      alt="product"
                      style={{
                        width: "1vw",
                        height: "1vw",
                        marginLeft: "0.5vw",
                      }}
                    />
                    مشاهده محصولات
                  </CustomButton>
                </Link>
                <CustomButton
                  backgroundColor="var(--color-black-primary)"
                  color="var(--color-white-original)"
                >
                  <img
                    src={vet}
                    alt="vet"
                    style={{
                      width: "1vw",
                      height: "1vw",
                      marginLeft: "0.5vw",
                      color: "var(--color-white-original)",
                    }}
                  />
                  رزرو نوبت پزشکی
                </CustomButton>
              </div>
            </div>
          </div>

          <img className="section-1-img" src={pou} alt="pet" />
        </section>
        <Category type="a" />
        <Offer title="تخفیف های امروز" categories={discounts} />
        <div className="online-vet">
          <div className="online-vet-title">مشاوره دامپزشکی آنلاین</div>
          <div className="online-vet-content">
            <div className="online-vet-content-right">
              <p>هرجای دنیا که هستی دامپزشک در کنارته !</p>
              <p>
                در 5 دقیقه سوال دامپزشکی ات رو ثبت کن و از رآبیاپت مشاوره بگیر و
                نوبت دامپزشکی رزرو کن .
              </p>
              <CustomButton
                backgroundColor="var(--color-white-primary)"
                color="var(--color-green-primary)"
                marginTop="1vw"
                fontSize="1vw"
              >
                <img
                  src={vet}
                  alt="vet"
                  style={{
                    width: "1vw",
                    height: "1vw",
                    marginLeft: "0.5vw",
                    color: "var(--color-white-original)",
                  }}
                />
                ورود به پنل و درخواست مشاوره دامپزشکی
              </CustomButton>
            </div>
            <div className="online-vet-content-left"></div>
          </div>
        </div>
        <Category type="b" title="لوازم ضروری سگ" />
        <Category type="c" title="جدیدترین محصولات رآبیاپت" />
        {/* <Category type="c" title="آخرین مقالات"/> */}
        <Offer title="آخرین محصولات" products={newProducts} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  mediaQuery: state.mediaQuery.mediaQuery,
});

export default connect(mapStateToProps)(HomePage);
