import React from 'react';
import {AppBar, Box, IconButton, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {Link as RouterLink, useLocation, useResolvedPath, Outlet} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function PageWithAppBar({title, tabs}) {
    return (
        <Box sx={{display: 'flex'}}>
            <AppBarWithRRTabs title={title} tabs={tabs}/>
            <Outlet/>
        </Box>
    );
}

export default PageWithAppBar;


function AppBarWithRRTabs({title, tabs}) {
    return (
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>

                <Typography variant="h6" mr={2} component={RouterLink} to="/"
                            sx={{color: "inherit", textDecoration: "inherit"}}>
                    {title}
                </Typography>
                <RRTabs tabs={tabs}/>
            </Toolbar>
        </AppBar>
    );
}


function RRTabs({tabs}) {
    let activeTab;
    for (let tab of tabs) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isActiveTab = useIsActive(tab.to);
        if (!activeTab && isActiveTab) {
            activeTab = tab.to;
        }
    }
    return (
        <Tabs indicatorColor="secondary"
              textColor="inherit"
              value={activeTab}>
            {tabs.map(({title, to}) => (
                <Tab key={to} label={title} value={to} component={RouterLink} to={to}/>
            ))}
        </Tabs>
    )

}

function useIsActive(to) {
    const location = useLocation();
    const resolvedPath = useResolvedPath(to);

    const currentPathname = location.pathname.toLowerCase();
    const resolvedPathname = resolvedPath.pathname.toLowerCase();

    const isActive =
        currentPathname === resolvedPathname ||
        (currentPathname.startsWith(resolvedPathname) &&
            currentPathname.charAt(resolvedPathname.length) === "/");

    return isActive;
}