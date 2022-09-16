import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllArticles } from "../../../api/articles.api";
import ArticleItem from "../../../components/article-item";

import '../styles/blogpage.styles.css';

const BlogPage = () => {
    const [articles, setArticles] = useState();

    useEffect(() => {
        getAllArticles()
            .then(data => setArticles(data))
    }, []);

    return (
        <div className="blog">
            <div className="blog-last-articles">
                <h2 className="blog-last-articles-title">
                    آخرین مقالات
                </h2>
                {articles ? articles.map(article => (
                    <div key={article.id}>
                       <ArticleItem article={article} type="small" /> 
                    </div>
                )) : ""}
            </div>
        </div>
    )
}

export default BlogPage;