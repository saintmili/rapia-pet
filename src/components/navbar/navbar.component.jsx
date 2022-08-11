import React from "react";

import { SearchField } from "../search-field/search-field.component";
import logo from "../../assets/logo.svg";
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
            <div>
              مشاوره دامپزشکی
            </div>
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
          <img src={logo} alt="logo" className='logo' />
        </div>
        <div className="navbar-section-left">
          <SearchField placeholder='جستجو: غذا خشک سگ' />
          <div className="navbar-phone">
            <div className="navbar-phone-text">09170340270</div>
            <img src={phone} alt="phone" />
          </div>
          <div className="navbar-profile">
            <img src={profile} alt="profile" />
          </div>
          <div className="navbar-cart">
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    )
}