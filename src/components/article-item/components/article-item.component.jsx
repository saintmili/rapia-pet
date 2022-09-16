import React from "react";

import "../styles/article-item.styles.css";

const ArticleItem = (props) => {
    return (
        <div className="article-item">
            <div className="article-item-top-section">
                <div className="article-item-top-section-green-line"></div>
                <div className="article-item-top-section-outer-box">
                    <div className="article-item-top-section-inner-box">
                        {props.article.title}
                    </div>
                </div>
            </div>
            <div className="article-item-categories">

            </div>
            <div className="article-item-title">
                {props.article.title}
            </div>
        </div>
    )
}

export default ArticleItem;