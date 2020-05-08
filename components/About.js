import styles from '../styles/about.module.css';

const AboutComponent = (props) => {
    return(
        <div className='about-page'>
            <h1 className='title primary-color'>
                Carve a niche.
            </h1>
            <div className='content'>
                <p>
                    I am always up to take responsibilities and face the challanges.
                </p>
                <p>
                    Day by day, I am trying to fufill my zeal to learn something new. I love to contribute to
                    the community & my organization, attend technical conferences & meetups, and collaborate
                    with new minds. It makes me extremely happy when my learning turns into a Software.
                </p>
                <p>
                    I solve real life problems with the help of science and technology. I have built scalable
                    applications with the best fit architecture and design patterns. I believe in the qulity of
                    code rather than number of bits. During development, I use data structures and alogrithms to
                    reduce the time and space complexity. Writing tests gives me the strength.<br />
                    Over the years, I have wore many hates from full stack developer to deployment specialist and stepped in multiple
                    shoes from a Software Enginner to a Product Owner.
                </p>
                <p>
                    I graduated in the year 2018,from M.B.M. Engineering College Jodhpur(Rajasthan). Currently, I am working as Software
                    Engineer at <a href='https://nymo.ai' target='_blank'>Nymo</a> and located in Bangalore(India).
                </p>
            </div>
        </div>
    )
}

export default AboutComponent;