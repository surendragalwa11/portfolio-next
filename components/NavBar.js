import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/navbar.module.css';

const NavBar = (props) => {
    const router = useRouter();
    const path = router.pathname;
    return(
        <nav className={styles.navbar}>
            {
                props.routes.map((route, i) => (
                    <Link href={route.url} key={i}> 
                        <a className={`${path === route.url ? styles.activeLink : ''}`}>
                        {route.label}
                    </a>
                    </Link>
                ))
            }
        </nav>
    )
}

export default NavBar;