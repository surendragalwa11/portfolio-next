import ReactGA from 'react-ga'

const initGA = () => {
    ReactGA.initialize('UA-162813923-2');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

export default initGA;