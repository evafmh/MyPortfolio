import React, { useEffect, useState } from 'react'

import './../../sassStyles/components/_skill.sass'

const Skill = ({ image, title, description, keywords }) => {
    const [imagePath, setImagePath] = useState('')

    useEffect(() => {
        import(`../../assets/images/${image}`)
            .then((module) => {
                setImagePath(module.default)
            })
            .catch((error) => {
                console.error(`Failed to load image: ${image}`)
            })
    }, [image])

    return (
        <div className="skill">
            <img src={imagePath} alt={title} className="skill-image" />
            <h3 className="skill-title">{title}</h3>
            <p className="skill-description">{description}</p>
            <div className="skill-keywords">
                {keywords.map((keyword, index) => (
                    <span key={index} className="skill-keyword">
                        {keyword}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Skill
