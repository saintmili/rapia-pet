import React, { useEffect } from "react";
import { connect } from "react-redux/es/exports";
import { Link } from "react-router-dom";

import { setProducts } from "../../redux/products/products.actions";

import Header from "../../components/header/header.component";
import ProductItem from "../../components/product-item/product-item.component";
import './productspage.styles.css';

const ProductsPage = (props) => {
    useEffect(() => {
        const base_url = "http://localhost:5000/api/v1/products";
        fetch(base_url, {
            method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => props.setProducts(data))
    }, [])

    return (
        <div>
            <Header/>
            <div className="products-page-container">
                { props.products ? props.products.map(product => (
                    <Link to={"/products/" + product.slug} style={{textDecoration: "none"}}>
                        <div className="products-page-product">
                            <ProductItem props={product} />
                        </div>
                    </Link>
                )) : null }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.products
})

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);