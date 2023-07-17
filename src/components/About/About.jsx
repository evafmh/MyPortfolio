import React from 'react'
import Link from '../Link/Link'
import profileImage from '../../assets/images/profile.jpg'

import './../../sassStyles/components/_about.sass'

const About = ({ data, id }) => {
    const { name, job, bio, cv, cvFileName } = data

    const paragraphs = bio.split('\n\n')

    return (
        <div id={id} className="about-container">
            <div className="about-left">
                <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <defs>
                        <pattern
                            id="myPattern"
                            height="100%"
                            width="100%"
                            patternContentUnits="objectBoundingBox"
                        >
                            <image
                                width="1"
                                preserveAspectRatio="xMidYMid slice"
                                xlinkHref={profileImage}
                            />
                        </pattern>
                    </defs>
                    <path
                        fill="url(#myPattern)"
                        d="M26.3,-31.4C34.1,-24.9,40.4,-16.5,42.4,-7.2C44.3,2.2,42.1,12.6,36.9,21.2C31.8,29.8,23.8,36.6,15,38.7C6.3,40.8,-3.3,38.1,-12.5,34.7C-21.8,31.2,-30.7,27,-35.5,19.9C-40.4,12.7,-41.2,2.7,-39.6,-7.1C-38.1,-16.9,-34.1,-26.5,-27.1,-33.2C-20.1,-39.9,-10.1,-43.7,-0.4,-43.3C9.3,-42.8,18.6,-38,26.3,-31.4Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                        strokeWidth="0"
                        style={{ transition: 'all 0.3s ease 0s' }}
                    />
                </svg>
            </div>
            <div className="about-right">
                <h2 className="about-name">{name}</h2>
                <h3 className="about-job">{job}</h3>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="about-bio">
                        {paragraph}
                    </p>
                ))}

                <Link
                    href={`/${cvFileName}`}
                    download={cvFileName}
                    className="about-cv-link"
                >
                    {cv}
                </Link>
            </div>
        </div>
    )
}

export default About
