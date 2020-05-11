const ContactComponent = (props) => {
    return(
        <div className='contact-page'>
            <h1 className='title primary-color'>
                Let's talk?
            </h1>
            <div className='contact-info'>
                <div className='user-image'>
                    <img alt='surendra' src='/surendra.jpeg' />
                </div>
                <div className='user-details'>
                    <p>Surendra Galwa</p>
                    <p>Contact: +91-6363175297</p>
                    <p>Email: surendragalwa111@gmail.com</p>
                    <p className='profiles'>
                        <a
                            href='https://www.linkedin.com/in/surendragalwa11/'
                            target='_blank'
                            title='LinkedIn'
                            aria-label='linkedin'
                            rel='noopener noreferrer'
                        >
                            <img alt='linkedin' className='lin-logo' src='/lin-logo.png' />
                        </a>
                        <a
                            href='https://github.com/surendragalwa11'
                            target='_blank'
                            title='GitHub'
                            aria-label='github'
                            rel='noopener noreferrer'
                        >
                            <img alt='github' className='ghub-logo' src='/github-logoo.png' />
                        </a>
                        <a 
                            href='https://twitter.com/surendragalwa11'
                            target='_blank'
                            title='Twitter'
                            aria-label='twitter'
                            rel='noopener noreferrer'
                        >
                            <img alt='twitter' className='tw-logo' src='/tw-logo.png' />
                        </a>
                        <a
                            href='https://www.hackerrank.com/surendragalwa11'
                            target='_blank'
                            title='HackerRank'
                            aria-label='hackerrank'
                            rel='noopener noreferrer'
                        >
                            <img alt='hackerrank' className='hrank-logo' src='/hackerrank-logo.png' />
                        </a>
                        <a
                            href='https://leetcode.com/surendragalwa11/'
                            target='_blank'
                            title='Leetcode'
                            aria-label='leetcode'
                            rel='noopener noreferrer'
                        >
                            <img alt='leetcode' src='/leetcode-logo.png' />
                        </a>
                    </p>
                    <p>
                        <a
                            className='resume'
                            href='/resume.pdf'
                            download
                            title='Resume'
                            aria-label='resume'
                            rel='noopener noreferrer'
                        >
                            Download Resume
                        </a>
                    </p>
                </div>
            </div>
            <style jsx>{`
            .contact-info {
                display: flex;
                justify-content: center;
                margin-top: 2rem;
            }

            .user-image img {
                border-radius: 50%;
                height: 13rem;
                width: 13rem;
                margin: 0 auto;
            }

            .user-details {
                margin-left: 2rem;
            }

            .user-details p {
                margin: 0;
                margin-bottom: 10px;
                font-size: 1.5rem;
                line-height: 1.5;
            }
            .user-details .profiles {
                display: flex;
                align-items: center;
            }

            .user-details .profiles a {
                width: 3.5rem;
                height: 3.5rem;
                display: flex;
            }

            .ghub-logo,
            .tw-logo {
                border-radius: 50%;
            }

            .tw-logo img {
                display: block !important;
            }

            .lin-logo {
                transform: scaleX(1.8) scaleY(0.95);
            }

            .hrank-logo {
                transform: scale(1.5);
            }

            .resume {
                text-decoration: underline;
                color: var(--ternary-color);
            }
            @media(max-width: 600px) {
                .contact-info {
                    flex-direction: column;
                }
            }
            `}</style>
        </div>
    )
}

export default ContactComponent;