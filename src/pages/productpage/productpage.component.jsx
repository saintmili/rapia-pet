import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { connect } from "react-redux/es/exports";

import { setProducts } from "../../redux/products/products.actions";

import './productpage.styles.css';
import Header from '../../components/header/header.component';
import { CustomButton } from "../../components/custom-button/custom-button.component";
import { getProductBySlug } from "../../api/products.api";

const ProductPage = props => {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!product) {
            getProductBySlug(params.productSlug)
                .then(data => setProduct(data))
        }
    }, [])

    return (
        <div className="product-page">
            <Header />
            <div className="product-page-container">
                <div className="game-page-header">
                    <div className="product-page-header-img-container"></div>
                    <div className="product-page-header-summarize">
                        <div className="product-page-header-boardcrump">خانه/غذا سگ/غذا خشک سگ</div>
                        <div className="product-page-header-title">
                            {product ? product.title : null}
                        </div>
                        <div className="product-page-header-review">
                            <div className="product-page-header-review-category">
                                <div className="product-page-header-review-category-img"></div>
                                <div className="product-page-header-review-category-txt">غذا خشک سگ</div>
                            </div>
                            <div className="product-page-header-review-category-stars"></div>
                            <div className="product-page-header-review-category-comments"></div>
                        </div>
                        <div className="product-page-header-product-attributes">
                            <div className="product-page-header-product-attributes-title">ویژگی های محصول:</div>
                            <div className="product-page-header-product-attributes-attribute">1- مناسب توله</div>
                            <div className="product-page-header-product-attributes-attribute">2- دارای فیبر و کالری</div>
                            <div className="product-page-header-product-attributes-attribute">3- دارای لاکتوز</div>
                            <div className="product-page-header-product-attributes-attribute">4- سن 2 تا 15 ماه</div>
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
                            <div className="product-page-header-cart-container-price">{product ? product.price : null}</div>
                            <div className="product-page-header-cart-container-quantity">تعداد:</div>
                            <div className="product-page-header-cart-container-addtocart">
                                <CustomButton backgroundColor="var(--color-blue-primary)" color="var(--color-white-primary)">افزودن به سبد خرید</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-page-menu">
                    <div className="product-page-menu-item">
                        <span className="product-page-menu-item-icon"></span>    
                        <span className="product-page-menu-item-text">بررسی محصول</span>    
                    </div> |
                    <div className="product-page-menu-item">
                        <span className="product-page-menu-item-icon"></span>    
                        <span className="product-page-menu-item-text">بررسی ویدیویی</span> 
                    </div> |
                    <div className="product-page-menu-item">
                        <span className="product-page-menu-item-icon"></span>    
                        <span className="product-page-menu-item-text">ویژگی ها</span> 
                    </div> |
                    <div className="product-page-menu-item">
                        <span className="product-page-menu-item-icon"></span>    
                        <span className="product-page-menu-item-text">ترکیبات محصول</span> 
                    </div> |
                    <div className="product-page-menu-item">
                        <span className="product-page-menu-item-icon"></span>    
                        <span className="product-page-menu-item-text">نظرات کاربران</span> 
                    </div> |
                    <div className="product-page-menu-item">
                        <span className="product-page-menu-item-icon"></span>    
                        <span className="product-page-menu-item-text">پرسش و پاسخ</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.products
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);