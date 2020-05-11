import '../styles/global.css';
import '../styles/work.module.css';
import NavBar from '../components/NavBar';
import routes from '../config/routes';



export default function App({Component, pageProps}) {
    return(
        <>
        <NavBar routes={routes} />
        <Component {...pageProps} />
        </>
    );
}