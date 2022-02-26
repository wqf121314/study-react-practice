import React, {useContext} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {AppContext} from "./AppContextProvider";
import styles from './ArticleSidebar.module.css';

function ArticleSidebar() {
    const {articles} = useContext(AppContext)

    return (
        <div className={styles.navBar}>
            <h1>Articles</h1>
            {articles.map(article =>
                <NavLink key={article.id} to={`${article.id}`}
                         className={({isActive}) => isActive ? styles.active : undefined}>
                    {article.title}
                </NavLink>)}
            <hr/>
            {/*<Link to="newArticle" className={styles.addNew}>New article</Link>*/}
        </div>
    );
}

function ArticlesPage() {
    return (
        <>
            <aside>
                <ArticleSidebar/>
            </aside>
            <main>
                <div className="box">
                    <Outlet/>
                </div>
            </main>
        </>
    );
}

export default ArticlesPage;