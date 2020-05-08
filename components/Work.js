const WorkComponent = (props) => {
    return(
        <div className='work-page'>
            <div className='company-section nymo'>
                <div className='header'>
                    <a className='logo' href='https://nymo.ai' target='_blank'>
                        <img src='/nymo-logo.jpg' />
                    </a>
                    <div className='company-info'>
                        <h3>Nymo Technologies, Bengaluru</h3>
                        <h4>Full Stack Developer</h4>
                        <p>Sep'2019 - Present</p>
                    </div>
                </div>
                <div className='grid'>
                    <div className='card'>
                        <p className='project-name'>
                            Video Management System (VMS)
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            This is a web enterprise application which is designed and developed to view raw and analyzed live
                            stream from IP cameras. The application streams media content from back end media server to web
                            client. This application manages worker servers using RPC protocol from a single master server. Analytic
                            servers convert the raw live and recorded IP camera footage into Analyzed (Face detection &
                            Recognition) media.
                            Developed modules to scan the network for available devices like IP cameras and worker servers.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            React JS, Redux, Redux Saga, Webpack, Babel, Bootstrap, Node JS, Micro Services,
                            MongoDB, Shell Scripts, Crons, FFMPEG, RTSP, ONVIF, RPC.
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Requirements & Design Analysis.<br />
                            • Development and Implementation of complete work flow.<br />
                            • Code reviews
                        </p>
                    </div>
                    <div className='card'>
                        <p className='project-name'>
                            Training Management System (TMS)
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            This is a web enterprise application which is designed and developed to use by Artificial Intelligence for
                            data preprocessing, training and testing the models.
                            Worked on the media preprocessing modules to convert Image (Resolution, Aspect Ratio, Gray Scale
                            etc) and video properties (FPS, Resolution, Quality using FFMPEG), split videos based on time stamp or
                            duration and Merge multiple videos into a single video file.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            React JS, Redux, Webpack, Babel, Bootstrap, Node JS, MongoDB, Shell Scripts,
                            Micro Services, Python Flask.
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br/>
                                • Planning & Requirement Analysis.<br/>
                                • Development and Implementation of complete work flow.<br/>
                                • Code reviews
                        </p>
                    </div>
                    <div className='card'>
                        <p className='project-name'>
                            Information Management System (IMS)
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            The Information Management System is an enterprise application to visualise different type
                            of information via interactive charts. This application has mainly four modules called
                            Profile, Summary, Event and Streams.
                            Profile modules displays profile related information via Bar Chart, Line Chart, Time Series Chart,
                            Google Map Chart, Summary Chart and Tree Map.
                            Similarly, Summary module visualises different summary information via chart, Event modules visualises
                            event based information in different type of charts.
                            Stream module visualises information of live data source. It displays live information via Gauge,
                            Time Series, Google Map and other type of charts.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            React JS, Redux, Nivo Charts, Fusion Charts, Webpack, Babel, Bootstrap, Node JS,
                            MongoDB, Shell Scripts.
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Planning & Requirement Analysis.<br/>
                            • Development and Implementation of complete work flow.<br/>
                            • Code reviews
                        </p>
                    </div>
                    <div className='card'>
                        <p className='project-name'>
                            Architecture
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            Architecture R&D and Implementation. I am involved in day to day
                            product architecture and planning activities like research
                            and development on different types of architecture and design pattern.
                            Finalised different architecture for each application based on the
                            requirements.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            Architecture, Design Patterns (DI, Factory, Abstract Factory etc), Python, NodeJS
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Architecture R&D <br/>
                            • Design Pattern Implementation
                        </p>
                    </div>
                </div>
            </div>
            <div className='company-section sigma'>
                <div className='header'>
                    <a className='logo' href='https://www.sigmainfo.net/' target='_blank'>
                            <img src='/sigma-logo.jpg' />
                    </a>
                    <div className='company-info'>
                        <h3>Sigma Infosolutions Pvt. Ltd., Bengaluru</h3>
                        <h4>Software Engineer</h4>
                        <p>Aug'2018 - Aug'2019</p>
                    </div>
                </div>
                <div className='grid'>
                    <div className='card'>
                        <p className='project-name'>
                            Atlas & AMP
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            The ATLAS displays the benchmarks and tracks regional health care performance on key quality. As the
                            state’s only source of comparable performance information about the care provided to 30 million
                            Californians, this project brings together multi payer data—commercial insurance, Medicare, and
                            Medi-Cal to help purchasers, health plans, and policymakers target performance improvement
                            initiatives..The project enables the end users to explore and compare with different measures like
                            diseases, years and risk basis as well.<br/>
                            The AMP is the analytics and information visualization tool for the Atlas.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            ReactJS, Redux, Bulma CSS, Redux Saga, i18n, and Highcharts.
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Development and Code reviews.<br/>
                            • Implementation of complete work flow.<br/>
                            • Client interaction & Requirement Analysis.
                        </p>
                    </div>
                    <div className='card'>
                        <p className='project-name'>
                            Reporting System
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            This is a web portal for dynamic report generation to see the investment details on the
                            basis of different parameter and filters.<br/>
                            Developed visulisation dashboards and charts for dynamic reports and a report rule set engine which can be configured
                            by the Admin. Added Admin portal and User portal with various configurable settings.<br/>
                            Automated the generated report delivery (.csv files) to multiple clients and clouds.
                            Worked on Amazon Athena to store the information in SQL database. Created SQL views to retrieve
                            different type of information to generate reports.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            Python, Django, Matplotlib Charts, Amazon Athena, AWS, SQL (views and queries).
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Client interaction & Requirement Analysis.<br/>
                            • Development and Implementation of complete work flow.<br/>
                            • Deployment
                        </p>
                    </div>
                    <div className='card'>
                        <p className='project-name'>
                            S-Connect
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            Sconnect is a Human Resources Information System that provides a one stop solution to support
                            various HR processes. The back end is developed using Node/Express js stack and the front end is a
                            single page application built using React JS. The back end exposes GraphQL APIs while the front end
                            uses famous GraphQL Apollo client to consume the APIs.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            Nodejs, Express, ReactJS, Apollo GraphQL, GraphQL, Mysql, jQuery, Babel,
                            Webpack, PassportJS, JWT.
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Development of modules – Employee management, Leave & Attendance management.<br/>
                            • SSO integration and implementation using node-openid-client plugin.<br/>
                            • Code reviews and requirements analysis.
                        </p>
                    </div>
                    <div className='card'>
                        <p className='project-name'>
                            Digital wallet and Shopping platform
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            This is a online platform to purchase and sell products. Created a digital wallet for user
                            transactions.<br/>
                            Added Ethereum cryptocurrency exchange functionality. Created services to fetch Ethereum transactions,
                            filter and verify.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            NodeJS, Express, SQL Transactions, Redis, Kue, Web3, Azure Service Bus,
                            Ethereum, Solidy, Smart Contracts, ERC20, Metamask, Ganache.
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Development and block chain R&D.<br/>
                            • Code reviews.<br/>
                            • Implementation of complete work flow.
                        </p>
                    </div>
                    <div className='card card-sm'>
                        <p className='project-name'>
                            Diagram & FlowCharts
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            Developed web based application for making flowcharts, process diagrams, org charts, UML,
                            ER and network diagrams.<br/>
                            Created modules modules to expport flowcharts and diagrams in multiple formats, import
                            existing flow diagrmas.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            mxgraph, Javascript, HTML, CSS
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • R&D on mxgraph and draw.io implementation<br/>
                            • Application Development
                        </p>
                    </div>
                    <div className='card card-sm'>
                        <p className='project-name'>
                            Others
                        </p>
                        <p className='project-summary'>
                            <span>Description:</span><br />
                            I keep implementing my ideas and trying new technologies. I have developed various starter
                            projecs as proof of concepts .<br/>
                            Please follow this link to visit my <a href='https://github.com/surendragalwa11' target='_blank'>Github</a> profile.<br/>
                            <a href='https://surendragalwa11.github.io/portfolio' target='_open'>Visit my React Portfolio</a>.
                        </p>
                        <p className='project-stack'>
                            <span>Technologies:</span><br />
                            NextJS, Data Science, Data Structure, GraphQL, PWAs and many more..
                        </p>
                        <p className='project-role'>
                            <span>Role:</span><br />
                            • Mentor<br/>
                            • Developer
                        </p>
                    </div>
                </div>          
            </div>
            <style jsx>{`
            .header {
                display: flex;
                justify-content: center;
            }
            
            .header .logo {
                flex-basis: 25%;
                padding: 0.3rem 0.5rem;
            }
            
            .header .logo img {
                width: 100%;
                height: 7rem;
                opacity: 0.85;
                border-radius: 10px;
            }

            .company-info {
                display: flex;
                margin-left: 1rem;
                flex-direction: column;
                justify-content: center;
            }
            
            .company-info h3 {
                color: var(--ternary-color)
            }
            
            .company-info h3,
            .company-info h4,
            .company-info p {
                margin: 0 0 10px 0;
            }
            
            .logo img {
                width: 20%;
                height: 5rem;
            }
            
            .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                margin: 2rem 0;
            }
              
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
            }

            .nymo .card {
                height: 650px;
            }

            .sigma .card {
                height: 600px;
            }

            .sigma .card-sm {
                height: 500px;
            }
              
            .card:hover,
            .card:focus,
            .card:active {
                border-color: var(--ternary-color);
            }
              
            .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }

            .card .project-name {
                color: cornsilk;
                font-size: 1.15rem;
                text-align: center;
            }
              
            .card p {
                margin: 0;
                line-height: 1.5;
                margin-bottom: 1rem;
            }

            .card span {
                text-decoration: underline;
            }
            
            @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
                .card {
                    width: 90%;
                }
                .header {
                    flex-direction: column;
                }
                .company-info {
                    padding: 0.5rem 1.25rem;
                }
            }
            `}</style>
        </div>
    )
}

export default WorkComponent;