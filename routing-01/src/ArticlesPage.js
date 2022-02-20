import React from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import styles from "./ArticleSidebar.module.css"


function ArticlesSidebar({articles}) {
    return (
        <div className={styles.navBar}>
            <h1>Articles</h1>
            {articles.map(article =>
                <NavLink key={article.id} to={`${article.id}`} className={({isActive}) => isActive && styles.active}>
                    {article.title}
                </NavLink>)
            }
            <hr/>
            <Link to="newArticle" className={styles.addNew}>New article</Link>
        </div>
    );
}


function ArticlesPage({articles}) {
    return (
        <>
            <aside>
                <ArticlesSidebar articles={articles}/>
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