import styles from './ArticleView.module.css';

import {useContext} from "react";
import {AppContext} from "./AppContextProvider";
import LoadingBar from "./LoadingBar";
import {Navigate, useParams} from "react-router-dom";
import {ArticleNotFound, NoArticles} from "./ErrorPages";

export function NavigateToFirstArticleIfLoaded() {
    const {articles, articlesLoading} = useContext(AppContext);
    if (articlesLoading) {
        return <LoadingBar/>
    } else if (!articlesLoading && articles?.length) {
        return <Navigate to={`${articles[0].id}`}/>;
    } else {
        return <NoArticles/>;
    }
}

export function ArticleView({article}) {
    return (
        <div className={styles.article}>
            <sh2>{article.title}</sh2>
            <img src={article.image}/>
            <p>{article.content}</p>
        </div>
    );
}


export function ArticleViewFromPathParams() {
    const {articles} = useContext(AppContext);
    const {id} = useParams();
    const article = articles.find(a => a.id === id);

    if (article) {
        return <ArticleView article={article}/>
    } else {
        return <ArticleNotFound/>
    }
}