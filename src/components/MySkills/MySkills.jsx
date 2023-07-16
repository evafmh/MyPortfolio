import React from 'react'
import Skill from '../Skill/Skill'

import './../../sassStyles/components/_mySkills.sass'

const MySkills = ({ skills }) => {
    return (
        <section className="my-skills-container">
            <div className="skill-list">
                {skills.map((skill, index) => (
                    <Skill
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        image={skill.image}
                        keywords={skill.keywords}
                    />
                ))}
            </div>
        </section>
    )
}

export default MySkills
