import React from "react";

import "./admin-product.styles.css";

const AdminProductPage = () => {

    return (
        <div className="admin-product">
            <div className="admin-product-title"></div>
            <form>
                <label for="title">
                    عنوان:
                </label>
                <input type="text" name="title" />
                <label for="slug">
                    نامک:
                </label>
                <input type="text" name="slug" />
                <label for="description">
                    نوضیحات:
                </label>
                <input type="text" name="description" />
                <label for="image">
                    تصویر:
                </label>
                <input type="file" name="image" />
                <label for="price">
                    قیمت:
                </label>
                <input type="number" name="price" />
            </form>
        </div>
    )
};

export default AdminProductPage;