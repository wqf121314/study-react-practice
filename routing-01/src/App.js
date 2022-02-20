import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";
import initialArticles from "./data"
import PageWithNavbar from "./PageWithNavbar";
import ArticlesPage from "./ArticlesPage";
import {PageNotFound} from "./ErrorPages";
import GalleryPage from "./GalleryPage";
import ArticleViewFromPathParams from "./ArticleViewFromPathParams";
import NewArticleForm from "./NewArticleForm";

function App() {
    const [articles, setArticles] = useState(initialArticles)
    const navigate = useNavigate();

    function handleAddArticle(title, content) {
        const updatedArticles = [...articles]
        const newArticle = {
            id: articles.length + 1,
            title,
            content,
            image: "https://placekitten.com/400/400"
        }
        updatedArticles.push(newArticle);
        setArticles(updatedArticles)
        navigate(`/articles/${newArticle.id}`, {replace: true});
    }

    return (
        <Routes>
            <Route path="/" element={<PageWithNavbar/>}>
                {/*设置默认跳转链接*/}
                <Route index element={<Navigate to="articles" replace/>}/>
                <Route path="articles" element={<ArticlesPage articles={articles}/>}>
                    {/*设置默认跳转链接*/}
                    <Route index element={<Navigate to={`${articles[0].id}`} replace/>}/>
                    <Route path=":id" element={<ArticleViewFromPathParams articles={articles}/>}/>
                    <Route path="newArticle" element={<NewArticleForm onAddArticle={handleAddArticle}/>}/>
                </Route>
                <Route path="gallery" element={<GalleryPage articles={articles}/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
