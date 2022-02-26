import {useContext} from 'react';
import styles from './GalleryPage.module.css';
import {AppContext} from "./AppContextProvider";
import {Link} from "react-router-dom";

function GalleryPage() {
    const {articles} = useContext(AppContext);
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