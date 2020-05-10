import {useEffect} from 'react';

import initGA from '../utils/analytics';

const HomeComponent = (props) => {
    useEffect(() => {
        initGA();
    })
    return(
        <div className='home-page'>
            <h1 className='title'>Hi, I am <span>Surendra.</span></h1>
            <p className='content'>
                A Software Engineer, who love to turn ideas into reality and play with the technologies.
            </p>
        </div>
    )
}

export default HomeComponent;