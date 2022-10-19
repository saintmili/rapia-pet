import React from "react";

import "../styles/product-review.styles.css";

const ProductReview = props => {
    return (
        <div className="product-review-container">
            <table>
                <tbody>
                    <tr>
                        <td>سن حیوان</td>
                        <td>سگ بالغ</td>
                    </tr>
                    <tr>
                        <td>برند</td>
                        <td>رویال کنین</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductReview;