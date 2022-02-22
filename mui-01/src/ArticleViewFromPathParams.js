import React from 'react';
import {useParams} from "react-router-dom";
import {ArticleNotFound} from "./ErrorPages";
import {Box, Typography} from "@mui/material";

export default function ArticleViewFromPathParams({articles}) {
    const {id} = useParams();
    console.log(id)
    const article = articles.find(a => a.id == id);

    if (article) {
        return <ArticleView article={article}/>;
    } else {
        return <ArticleNotFound/>;
    }
}

function ArticleView({article}) {
    return (
        <>
            <Typography variant="h2" component="h2" gutterBottom>{article.title}</Typography>
            <Box
                component="img"
                src={article.image}
                sx={{
                    float: 'left',
                    marginRight: (theme) => theme.spacing(2),
                    marginBottom: (theme) => theme.spacing(2)
                }}/>
            <ArticleContent content={article.content}/>
        </>
    );
}

function ArticleContent({content}) {
    if (typeof content === "string") {
        return <Typography paragraph sx={{textAlign: 'justify'}}>{content}</Typography>;
    } else {
        return content.map((para, index) => (
            <Typography key={index} paragraph sx={{textAlign: 'justify'}}>{para}</Typography>
        ));
    }
}