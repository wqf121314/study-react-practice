import {NavLink, Outlet} from "react-router-dom";
import styles from "./NavBar.module.css"

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

function NavBar() {
    return (
        <div className={styles.navBar}>
            <NavLink to="/articles"
                     className={({isActive}) => isActive ? styles.activeLink : undefined}>Articles</NavLink>
            <NavLink to="/gallery"
                     className={({isActive}) => isActive ? styles.activeLink : undefined}>Gallery</NavLink>
        </div>
    );
}

export default PageWithNavbar;