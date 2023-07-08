import React from 'react'

const Header = ({ title, list }) => {
    return (
        <header className="header-container">
            <div className="header-content">
                <ul className="header-subtext">
                    {list.map((item, index) => (
                        <li key={index}>
                            {item}
                            {index !== list.length - 1 && (
                                <span className="vertical-bar"></span>
                            )}
                        </li>
                    ))}
                </ul>
                <h1 className="title">{title}</h1>
            </div>
            <div className="svg-container">
                <svg
                    className="sw-js-blob"
                    id="sw-js-blob-svg1"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient"
                            x1="0"
                            x2="1"
                            y1="1"
                            y2="0"
                        >
                            <stop
                                id="stop1"
                                className="stop1"
                                offset="0%"
                            ></stop>
                            <stop
                                id="stop2"
                                className="stop2"
                                offset="100%"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        className="gradient-1"
                        d="M22.1,-38.1C27.8,-35.1,31,-27.4,35.2,-20.3C39.4,-13.1,44.6,-6.6,45.7,0.6C46.8,7.9,43.8,15.7,38.6,21.1C33.5,26.6,26.1,29.6,19.3,30.6C12.5,31.6,6.3,30.6,-0.8,32C-7.9,33.4,-15.7,37.2,-22.6,36.2C-29.4,35.1,-35.2,29.4,-36.4,22.6C-37.7,15.8,-34.4,7.9,-32.1,1.3C-29.9,-5.3,-28.7,-10.6,-26.6,-15.8C-24.4,-21.1,-21.3,-26.2,-16.7,-29.9C-12.1,-33.5,-6,-35.5,1.1,-37.4C8.2,-39.3,16.5,-41,22.1,-38.1Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                        strokeWidth="0"
                    ></path>
                </svg>

                <svg
                    className="sw-js-blob"
                    id="sw-js-blob-svg2"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="sw-gradient-3"
                            x1="0"
                            x2="1"
                            y1="1"
                            y2="0"
                        >
                            <stop
                                id="stop3"
                                className="stop3"
                                offset="0%"
                            ></stop>
                            <stop
                                id="stop4"
                                className="stop4"
                                offset="100%"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        className="gradient-2"
                        d="M17.4,-29.7C24.1,-26.3,32,-24.7,37.2,-20C42.5,-15.4,45,-7.7,44.1,-0.5C43.2,6.7,38.9,13.3,35.1,20.4C31.3,27.6,28,35.2,22.2,37.1C16.5,39,8.2,35.2,0.1,35.1C-8.1,35,-16.2,38.5,-22.2,36.8C-28.3,35,-32.3,28,-35.7,21C-39.1,13.9,-42,7,-42.3,-0.2C-42.6,-7.3,-40.4,-14.7,-36.6,-21.2C-32.9,-27.7,-27.7,-33.3,-21.4,-36.9C-15,-40.4,-7.5,-41.8,-1.1,-40C5.4,-38.2,10.8,-33.1,17.4,-29.7Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                        strokeWidth="0"
                        stroke="url(#sw-gradient)"
                    ></path>
                </svg>
            </div>
        </header>
    )
}

export default Header
