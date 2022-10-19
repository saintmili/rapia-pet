import React from "react";

import "../styles/footer.styles.css";
import Benefits1 from "../../../assets/imgs/benefits/benefits1.svg";
import FooterPhone from "../../../assets/imgs/footer-phone.svg";
import FooterLocation from "../../../assets/imgs/footer-location.svg";
import SitechLogo from "../../../assets/imgs/sitech-logo.svg";
import Whatsapp from "../../../assets/imgs/whatsapp.svg";
import Telegram from "../../../assets/imgs/telegram.svg";
import Twitter from "../../../assets/imgs/twitter.svg";
import Pinterest from "../../../assets/imgs/pinterest.svg";
import Instagram from "../../../assets/imgs/instagram.svg";
import { Link } from "react-router-dom";

const footerMenuItems = [
    {
        id: 1,
        data: "خانه",
        route: "/"
    },
    {
        id: 2,
        data: "فروشگاه",
        route: "/shop"
    },
    {
        id: 3,
        data: "وبلاگ",
        route: "/blog"
    },
    {
        id: 4,
        data: "درباره ما",
        route: "/about"
    },
    {
        id: 5,
        data: "تماس با ما",
        route: "/contact"
    },
    {
        id: 6,
        data: "حساب کاربری",
        route: "/"
    },
]
const footerBenefits = [
    {
        id: 1,
        title: "ارسال اکسپرس",
        image: Benefits1
    },
    {
        id: 2,
        title: "۷ روز ضمانت بازگشت وجه",
        image: Benefits1
    },
    {
        id: 3,
        title: "پشتیبانی تلفنی و چت",
        image: Benefits1
    },
    {
        id: 4,
        title: "پرداخت امن",
        image: Benefits1
    }

]

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                {footerMenuItems.map(item => (
                    <Link to={item.route} className="footer-menu-item" key={item.id} style={{all: "unset"}}>
                        {item.data}
                    </Link>
                ))}
            </div>
            <div className="footer-socialmedia">
                <img src={Pinterest} alt="" />
                <img src={Twitter} alt="" />
                <img src={Telegram} alt="" />
                <img src={Whatsapp} alt="" />
                <img src={Instagram} alt="" />
            </div>
            <div className="footer-container">
                <div className="footer-benefits">
                    {footerBenefits.map(benefit => (
                        <div className="footer-benefit" key={benefit.id}>
                            <img src={benefit.image} alt={"benefit" + benefit.id}/>
                            <div className="footer-benefit-title">
                                {benefit.title}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="footer-aboutus">
                    <h2 className="footer-aboutus-title">
                        درباره رآبیاپت
                    </h2>
                    <p className="footer-aboutus-description">
                        رآبیاپت در سال 1400 با هدف فرهنگ سازی در زمینه‌ی نگهداری از سگ و بهبود کیفیت خدمات بهداشتی، درمانی و آموزشی در ایران متولد شد.
                    </p>
                    <div className="footer-aboutus-links">
                        <div className="footer-aboutus-links-phone">
                            <img src={FooterPhone} alt="" />
                            <h3>۰۹۱۷۰۳۴۰۲۷۰</h3>
                        </div>
                        <div className="footer-aboutus-links-address">
                            <img src={FooterLocation} alt="" />
                            <h4>
                                شیراز – پل معالی اباد – ساختمان الف –طبقه ۳ واحد ۳۰۲ (مراجعه با هماهنگی)
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="footer-certificates">
                    <h2 className="footer-certificates-title">
                        مجوزها
                    </h2>
                    <div className="fotter-certificates-container">

                    </div>
                </div>
            </div>
            <div className="footer-copyrights">
                <h6>
                    تمام حقوق سایت برای پت شاپ محفوظ می‌باشد ©
                </h6>
                <h6>طراحی و توسعه توسط:<img src={SitechLogo} alt="" /></h6>
            </div>
        </div>
    )
}

export default Footer;