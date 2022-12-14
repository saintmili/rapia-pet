import React, { useEffect } from "react";
import { connect } from "react-redux/es/exports";
import { Link } from "react-router-dom";

import { setProducts } from "../../redux/products/products.actions";
import { getAllProducts } from "../../api/products.api";

import ProductItem from "../../components/product-item";
import "./productspage.styles.css";

const ProductsPage = (props) => {
  useEffect(() => {
    getAllProducts().then((data) => props.setProducts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="products-page-container">
        {props.products
          ? props.products.map((product) => (
              <Link
                to={"/products/" + product.slug}
                style={{ textDecoration: "none" }}
                key={product.id}
              >
                <div className="products-page-product">
                  <ProductItem props={product} />
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setProducts(products)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

