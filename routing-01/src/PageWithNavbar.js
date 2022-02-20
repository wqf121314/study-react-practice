import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import styles from "./NavBar.module.css"


function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="/articles" className={({isActive}) => isActive && styles.activeLink}> articles</NavLink>
            <NavLink to="/gallery" className={({isActive}) => isActive && styles.activeLink}>Gallery</NavLink>
        </div>
    );
}

function PageWithNavbar() {
    return (
        <div className="container">
            <nav>
                <NavBar/>
            </nav>
            <Outlet/>
        </div>
    );
}

export default PageWithNavbar;