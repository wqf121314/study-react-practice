import express from "express";
import {retrieveArticleList, retrieveArticle, createArticle, updateArticle, deleteArticle} from "../dao/articles-dao";

//201 Created 是一个代表成功的应答状态码，表示请求已经被成功处理，并且创建了新的资源。
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
//成功状态响应码，表示该请求已经成功了，但是客户端客户不需要离开当前页面。
const HTTP_NO_CONTENT = 204;

const router = express.Router();

router.get('/', (req, res) => {
    res.json(retrieveArticleList());
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const article = retrieveArticle(id);

    if (article) {
        res.json(article);
    } else {
        res.status(HTTP_NOT_FOUND).json({message: `not found article id: ${id}`}).end();
    }
});
router.post('/', (req, res) => {
    const {title, image, content} = req.body;
    const newArticle = createArticle({title, image, content})
    res.status(HTTP_CREATED)
        .header('Location', `/api/article/${newArticle.id}`)
        .json(newArticle)
})
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const article = req.body;
    article.id = id;
    const success = updateArticle(article)
    if (success) {
        // res.status(HTTP_CREATED).json(article).end()
        res.status(HTTP_NO_CONTENT).end()

    } else {
        res.status(HTTP_NOT_FOUND).json({message: `article with id:${id} not found in DB`, article}).end()
    }
})
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const article = retrieveArticle(id);
    if (article) {
        deleteArticle(id);
        // res.status(HTTP_CREATED).json(retrieveArticleList()).end()
        res.status(HTTP_NO_CONTENT).end();
    } else {
        res.status(HTTP_NOT_FOUND).json({message: `article with id:${id} not found in DB`}).end()
    }
})
export default router;