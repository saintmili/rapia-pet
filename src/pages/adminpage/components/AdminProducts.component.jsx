import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import CustomButton from "@/common/components/CustomButton";
import { getAllProducts, deleteProductById } from "@/api/products.api";

import "../styles/AdminProducts.styles.css";

const AdminProducts = () => {
  const [products, setProducts] = useState();
  const params = ["آی دی", "عنوان", "نامک", "قیمت", "عملیات"];
  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);
  return (
    <div className="admin-products">
      <Link
        // Todo: show add and edit product pages in admin product container instead of navigating to route
        to="/admin/product"
        style={{ textDecoration: "none", width: "fit-content" }}
      >
        <CustomButton
          color={"#512FFF"}
          style={{ borderRadius: "0.5vw", fontSize: "1vw", fontWeight: "bold" }}
        >
          افزودن محصول
        </CustomButton>
      </Link>
      <table className="admin-products-table">
        <thead>
          <tr>
            {params.map((param) => (
              <th key={param}>{param}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.slug}</td>
                  <td>{product.price}</td>
                  <td>
                    <CustomButton
                      backgroundColor="red"
                      color="white"
                      onClick={() => {
                        deleteProductById(product.id);
                      }}
                    >
                      حذف
                    </CustomButton>
                    <CustomButton backgroundColor="yellow">ویرایش</CustomButton>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
        {/* <tfoot>
          <tr>
            {params.map((param) => (
              <th key={param}>{param}</th>
            ))}
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
};

export default AdminProducts;
