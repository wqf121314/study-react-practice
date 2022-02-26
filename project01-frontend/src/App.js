import {Routes, Route, Navigate} from "react-router-dom";
import PageWithNavbar from "./PageWithNavbar";
import ArticlesPage from "./ArticlesPage";
import {ArticleViewFromPathParams, NavigateToFirstArticleIfLoaded} from "./ArticleView";
import {PageNotFound} from "./ErrorPages";
import GalleryPage from "./GalleryPage";
import NewArticleForm from "./NewArticleForm";

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<PageWithNavbar/>}>
                {/*设置默认页面*/}
                <Route index element={<Navigate to="articles" replace/>}/>

                <Route path='articles' element={<ArticlesPage/>}>
                    {/*默认的articles页面¬*/}
                    <Route index element={<NavigateToFirstArticleIfLoaded/>}/>
                    <Route path=":id" element={<ArticleViewFromPathParams/>}/>
                    {/*<Route path="newArticle" element={<NewArticleForm />} />*/}
                </Route>
                <Route path="gallery" element={<GalleryPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
    );
}

