import Link from 'next/link';
import {useState} from 'react';

import styles from '../styles/navbar.module.css';

const NavBar = (props) => {
    const [activeLink, setActiveLink] = useState('/')
    return(
        <nav className={styles.navbar}>
            {
                props.routes.map((route, i) => (
                    <Link href={route.url} key={i}> 
                        <a
                            className={`${activeLink === route.url ? styles.activeLink : ''}`}
                            onClick={() => setActiveLink(route.url)}
                        >
                        {route.label}
                    </a>
                    </Link>
                ))
            }
        </nav>
    )
}

export default NavBar;