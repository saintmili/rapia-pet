import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { CustomButton } from "../custom-button/custom-button.component";

import './admin-products.styles.css';

const AdminProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        try {
            const baseUrl = "http://localhost:5000/api/v1/products"
            fetch(baseUrl, {
                method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
            })
                .then( res => res.json())
                .then(data => setProducts(data))
                .catch(err => console.error(err))
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className="admin-products">
            <Link to="/admin/product" style={{textDecoration: "none"}}><CustomButton backgroundColor="#45ff45">افزودن محصول</CustomButton></Link>
            <table className="admin-products-table">
                <thead>
                    <tr>
                        <th>آی دی</th>
                        <th>عنوان</th>
                        <th>نامک</th>
                        <th>قیمت</th>
                    </tr>
                </thead>
                {products ? products.map(product => {
                    return (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.slug}</td>
                            <td>{product.price}</td>
                            <td>
                                
                            </td>
                        </tr>
                    )
                }) : ""}
                <tfoot>
                <tr>
                        <th>آی دی</th>
                        <th>عنوان</th>
                        <th>نامک</th>
                        <th>قیمت</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default AdminProducts;