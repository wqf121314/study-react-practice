import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Box, Divider, Drawer, List, ListItem, ListItemText, Toolbar} from "@mui/material";

export default function ArticlesPage({articles}) {
    return (
        <>
            <ArticlesDrawer articles={articles}/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </>
    );
}

const drawerWidth = 240;

function ArticlesDrawer({articles}) {
    return (
        <Drawer variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'}
                }}>
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    {articles.map(article => (
                        <ListItem button key={article.id} component={Link} to={`${article.id}`}>
                            <ListItemText primary={article.title}/>
                        </ListItem>
                    ))}
                    <Divider/>
                    <ListItem button component={Link} to="new">
                        <ListItemText primary="New Article"/>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
