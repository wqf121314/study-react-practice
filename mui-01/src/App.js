import {Routes, Route, Navigate, useNavigate, useParams} from 'react-router-dom';
import PageWithAppBar from "./PageWithAppBar";
import {PageNotFound} from "./ErrorPages";
import GalleryPage from "./GalleryPage";
import initialArticles from './data';
import {useState} from "react";
import ArticlesPage from "./ArticlesPage";
import ArticleViewFromPathParams from "./ArticleViewFromPathParams";
import NewArticleForm from "./NewArticleForm";


const navbarTabs = [
    {title: 'Articles', to: '/articles'},
    {title: 'Gallery', to: '/gallery'}
]

function App() {
    const [articles, setArticles] = useState(initialArticles);
    const navigate = useNavigate();

    function handleAddArticle(title, content) {
        // Add the new article
        const updatedArticles = [...articles];
        const newArticle = {
            id: articles.length + 1,
            title,
            content,
            image: "https://placekitten.com/400/400"
        };
        updatedArticles.push(newArticle);
        setArticles(updatedArticles);

        navigate(`/articles/${newArticle.id}`, {replace: true});
    }

    return (
        <Routes>
            <Route path="/" element={<PageWithAppBar title="MUI Article View" tabs={navbarTabs}/>}>
                <Route index element={<Navigate to="gallery" replace/>}/>
                <Route path="articles" element={<ArticlesPage articles={articles}/>}>
                    <Route index element={<Navigate to={`${articles[0].id}`} replace/>}/>
                    <Route path=":id" element={<ArticleViewFromPathParams articles={articles}/>}/>
                    <Route path="new" element={<NewArticleForm onAddArticle={handleAddArticle}/>}/>
                </Route>
                <Route path="gallery" element={<GalleryPage articles={articles}/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Route>

        </Routes>
    );
}

export default App;
