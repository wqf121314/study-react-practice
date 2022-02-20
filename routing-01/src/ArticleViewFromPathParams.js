import React from 'react';
import {useParams} from "react-router-dom";
import styles from './ArticleView.module.css';
import {ArticleNotFound} from "./ErrorPages";

function ArticleView({article}) {
    return (<div className={styles.article}>
        <h2>{article.title}</h2>
        <img src={article.image}/>
        <p>{article.content}</p>
    </div>);
}

function ArticleViewFromPathParams({articles}) {
    const {id} = useParams();
    const article = articles.find(a => a.id == id);
    console.log(article)
    if (article) {
        return (
            <ArticleView article={article}/>
        );
    } else {
        return <ArticleNotFound/>;
    }

}

export default ArticleViewFromPathParams;