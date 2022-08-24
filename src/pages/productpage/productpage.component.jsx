import React from "react";
import {useParams} from 'react-router-dom';
import { connect } from "react-redux/es/exports";

import './productpage.styles.css';

import Header from '../../components/header/header.component';
import { useEffect } from "react";
import { setProducts } from "../../redux/products/products.actions";
import { useState } from "react";

const ProductPage = props => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        if (!props.products) {
            const base_url = `http://localhost:5000/api/v1/products`;
            fetch(base_url, {
                method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => setProduct(data.filter(product => product.slug === params.productSlug)[0]))
        } else {
            setProduct(props.products.filter(product => product.slug === params.productSlug)[0])
        }
    }, [])
    return (
        <div className="product-page">
            <Header />
            <div className="product-page-container">
                <div className="game-page-header">
                    <div className="product-page-header-img-container"></div>
                    <div className="product-page-header-summarize">
                        <div className="product-page-header-boardcrump">home/somewhere</div>
                        <div className="product-page-header-title">
                            {product ? product.title : null}
                        </div>
                    </div>
                    <div className="product-page-header-cart">
                        
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