import React from 'react';
import {Link} from "react-router-dom";
import styles from './GalleryPage.module.css'

function GalleryPage({articles}) {
    return (
        <main className={styles.gallery}>
            {articles.map(article =>
                <div key={article.id} className={`box ${styles.imageBox}`}>
                    <img src={article.image}/>
                    <p className={styles.caption}>
                        <span>From article: </span>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </p>
                </div>)}
        </main>
    );
}

export default GalleryPage;