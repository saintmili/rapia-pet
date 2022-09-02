import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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
            <table className="admin-products-table">
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>slug</th>
                </tr>
                {products ? products.map(product => {
                    return (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.slug}</td>
                        </tr>
                    )
                }) : ""}
            </table>
        </div>
    );
};

export default AdminProducts;