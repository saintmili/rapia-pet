import React from "react";
import { Link } from "react-router-dom";

import { SearchField } from "../search-field/search-field.component";
import logoHeader from "../../assets/logo-rabia.png";
import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import phone from "../../assets/phone.svg";
import grooming from "../../assets/grooming.svg";
import train from "../../assets/train.svg";
import vet from "../../assets/vet.svg";

import './navbar.styles.css';

export const NavBar = (props) => {
    return (
      <div className='navbar'>
        <div className="navbar-section-right">
          <div className="navbar-vet">
            <div className="navbar-vet-img">
              <img src={vet} alt="vet" />
            </div>
            <p  >
              مشاوره دامپزشکی
            </p>
          </div>
          <div className="navbar-train">
            <div className="navbar-train-img">
              <img src={train} alt="train" />
            </div>
            <div>
              تربیت سگ
            </div>
          </div>
          <div className="navbar-grooming">
            <div className="navbar-grooming-img">
              <img src={grooming} alt="grooming" />
            </div>
            <div>
              آرایشگاه سگ
            </div>
          </div>
        </div>
        <div className="navbar-section-center">
          <Link to="/">
            <img src={logoHeader} alt="logo" className='logo-header' />
          </Link>
        </div>
        <div className="navbar-section-left">
          <SearchField placeholder='جستجو: غذا خشک سگ' />
          <div className="navbar-phone">
            <a href="tel:09170340270">09170340270</a>
            <img src={phone} alt="phone"  className="phone-icon" />
          </div>
          <Link to="/login">
            <div className="navbar-profile">
              <img src={profile} alt="profile" />
            </div>
          </Link>
          <div className="navbar-cart">
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    )
}