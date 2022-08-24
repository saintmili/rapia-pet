import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

import Category from "../components/category/category.component";
import Offer from "../components/offer/offer.component";
import Header from "../components/header/header.component";
import { CustomButton } from "../components/custom-button/custom-button.component";
import pou from '../assets/pou.svg';
import product from '../assets/products.svg';
import vet from '../assets/vet.svg';
import img1 from '../assets/img1.png';
import { setCurrentUser } from "../redux/user/user.actions";

import './homepage.styles.css';

const discounts = [
    {
        title: 'غذا سگ',
        items: [
            {
                title: 'غذای خشک سگ',
                img: img1,
                price: "۱۱۵,۰۰۰ تومان",
                discount: "۹۵,۰۰۰ تومان",
                id: 1
            },
            {
                title: 'تشویقی ونپی Lamb Jerky Slices طعم گوشت بره',
                img: img1,
                price: "9999",
                discount: "",
                id: 2
            },
            {
                title: 'غذای خشک سگ',
                img: img1,
                price: "9999",
                discount: "",
                id: 3
            },
            {
                title: 'غذای خشک سگ',
                img: img1,
                price: "9999",
                discount: "",
                id: 4
            }
        ],
        id: 1,
    },
    {
        title: 'قلاده سگ',
        items: [
            {
                title: 'غذای خشک سگ',
                img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                price: "9999",
                discount: "",
                id: 1
            },
            {
                title: 'غذای خشک سگ',
                img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                price: "9999",
                discount: "",
                id: 2
            },
            {
                title: 'غذای خشک سگ',
                img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                price: "9999",
                discount: "",
                id: 3
            }
        ],
        id: 2,
    },
    {
        title: 'اسباب بازی سگ',
        items: [
            {
                title: 'غذای خشک سگ',
                img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                price: "9999",
                discount: "",
                id: 1
            },
            {
                title: 'غذای خشک سگ',
                img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                price: "9999",
                discount: "",
                id: 2
            },
            {
                title: 'غذای خشک سگ',
                img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                price: "9999",
                discount: "",
                id: 3
            }
        ],
        id: 3,
    }
];

const newProducts = [
    {
        title: 'غذای خشک سگ',
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: "9999",
        discount: "",
        id: 1
    },
    {
        title: 'غذای خشک سگ',
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: "9999",
        discount: "",
        id: 2
    },
    {
        title: 'غذای خشک سگ',
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: "9999",
        discount: "",
        id: 3
    },
    {
        title: 'غذای خشک سگ',
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: "9999",
        discount: "",
        id: 4
    }
];

const HomePage = (props) => {
    // const { setCurrentUser } = props.setCurrentUser

    useEffect(() => {
        const baseURL = 'http://localhost:5000/api/v1/auth/login';
        fetch(baseURL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "test",
                password: "test"
            })
        })
            .then(resp => resp.json())
            .then(data => displayData(data));

        function displayData(data) {
            props.setCurrentUser(data)
        }
    })

    return (
        <div className="homepage">
            <Header />
            <section className='section-1'>
                <div className='section-1-title'>
                    <h1>رآبیا<span>پت</span>:</h1>
                    <h2><span>دامپزشکی</span> و <span>پت شاپ</span> آنلاین</h2>
                </div>
                <div className='section-1-content'>
                    <p>لوازم ضروری و غیر ضروری سگ رو با بهترین قیمت در رآبیاپت پیدا کنید و بخرید</p>
                    <div className="section-1-btns">
                        <CustomButton backgroundColor='var(--color-blue-primary)' color='var(--color-white-original)'><img src={product} alt="product" style={{width: "1vw", height: "1vw", marginLeft: "0.5vw"}} />مشاهده محصولات</CustomButton>
                        <CustomButton backgroundColor='var(--color-black-primary)' color='var(--color-white-original)'><img src={vet} alt="vet" style={{width: "1vw", height: "1vw", marginLeft: "0.5vw", color: "var(--color-white-original)"}} />رزرو نوبت پزشکی</CustomButton>
                    </div>
                </div>
                <img className='section-1-img' src={pou} alt='pet' />
            </section>
            <Category type="a"/>
            <Offer title="تخفیف های امروز" categories={discounts} />
            <div className="online-vet">
                <div className="online-vet-title">مشاوره دامپزشکی آنلاین</div>
                <div className="online-vet-content">
                    <div className="online-vet-content-right">
                        <p>هرجای دنیا که هستی دامپزشک در کنارته !</p>
                        <p>در 5 دقیقه سوال دامپزشکی ات رو ثبت کن و از رآبیاپت مشاوره بگیر و نوبت دامپزشکی رزرو کن .</p>
                        <CustomButton backgroundColor='var(--color-white-primary)' color='var(--color-green-primary)' marginTop="1vw" fontSize="1vw"><img src={vet} alt="vet" style={{width: "1vw", height: "1vw", marginLeft: "0.5vw", color: "var(--color-white-original)"}} />ورود به پنل و درخواست مشاوره دامپزشکی</CustomButton>
                    </div>
                    <div className="online-vet-content-left">

                    </div>
                </div>
            </div>
            <Category type="b" title="لوازم ضروری سگ"/>
            <Category type="c" title="جدیدترین محصولات رآبیاپت"/>
            {/* <Category type="c" title="آخرین مقالات"/> */}
            <Offer title="آخرین محصولات" products={newProducts} />
        </div>
    );
}

const mapDispatchToProps = dispach => ({
    setCurrentUser: user => dispach(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(HomePage);