import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts, deleteProductById } from "../../api/products.api";

import './admin-products.styles.css';

import { CustomButton } from "../custom-button/custom-button.component";

const AdminProducts = () => {
    const [products, setProducts] = useState();
    const params = ["آی دی", "عنوان", "نامک", "قیمت", ""]
    useEffect(() => {
        getAllProducts()
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="admin-products">
            <table className="admin-products-table">
                <thead>
                    <tr>
                        {params.map(param => <th key={param}>{param}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {products ? products.map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.slug}</td>
                                <td>{product.price}</td>
                                <td>
                                    <CustomButton backgroundColor="red" color="white" onClick={() => {deleteProductById(product.id)}}>حذف</CustomButton>
                                    <CustomButton backgroundColor="yellow">ویرایش</CustomButton>
                                </td>
                            </tr>
                        )
                    }) : <tr></tr>}
                </tbody>
                <tfoot>
                    <tr>
                        {params.map(param => <th key={param}>{param}</th>)}
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default AdminProducts;