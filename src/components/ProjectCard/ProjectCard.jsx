import { React, useEffect } from 'react'
import { Card, CardMedia, CardContent, Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import ImageGallery from '../ImageGallery/ImageGallery'

import './../../sassStyles/components/_projectCard.sass'

const ProjectKeywords = ({ keywords }) => (
    <div>
        {keywords.map((keyword, index) => (
            <span key={index} className="project-technologies-keyword">
                {keyword}
            </span>
        ))}
    </div>
)

const ProjectCard = ({
    project,
    expanded,
    onCardClick,
    onCloseCard,
    imagePaths,
}) => {
    const paragraphs = project.detailedDescription.split('\n\n')

    useEffect(() => {
        if (expanded) {
            document.body.classList.add('body-no-scroll')
            // Rest of your expanded card logic
        } else {
            document.body.classList.remove('body-no-scroll')
            // Rest of your collapsed card logic
        }
    }, [expanded])

    return (
        <div className={`project-card-wrapper${expanded ? ' active' : ''}`}>
            <Card
                className={`project-card${expanded ? ' active' : ''}`}
                data-category={project.category}
                onClick={onCardClick}
            >
                {expanded && (
                    <div className="close" onClick={onCloseCard}>
                        <FontAwesomeIcon
                            className="close-icon"
                            icon={faCircleXmark}
                        />{' '}
                    </div>
                )}
                <div
                    className={`card-main-elements${
                        expanded ? ' expanded' : ''
                    }`}
                >
                    <CardMedia
                        className="project-image"
                        component="img"
                        src={imagePaths[project.title] || ''}
                        alt={`${project.title} illustration`}
                    />
                    <CardContent
                        className={`project-main-content${
                            expanded ? ' expanded' : ''
                        }`}
                    >
                        {expanded ? (
                            /* Contenu étendu */
                            <Grid
                                className="project-content-container expanded"
                                container
                                spacing={2}
                            >
                                <Grid item xs={12}>
                                    <h3 className="project-title expanded">
                                        {project.title}
                                    </h3>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className="project-technologies"
                                >
                                    <ProjectKeywords
                                        keywords={project.keywords}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {paragraphs.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="project-description expanded"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </Grid>
                            </Grid>
                        ) : (
                            /* Contenu non étendu */
                            <Grid container spacing={2} className="custom-grid">
                                <Grid item xs={12}>
                                    <h3 className="project-title">
                                        {project.subtitle}
                                    </h3>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    className="project-technologies"
                                >
                                    <ProjectKeywords
                                        keywords={project.technologiesUsed}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ul className="project-description">
                                        {project.competencies.map(
                                            (competency, index) => (
                                                <li key={index}>
                                                    {competency}
                                                </li>
                                            )
                                        )}{' '}
                                    </ul>
                                </Grid>
                            </Grid>
                        )}
                    </CardContent>
                </div>
                {expanded && ( // Afficher le contenu supplémentaire uniquement si la carte est étendue
                    <div className="additional-card-content">
                        <Grid
                            container
                            spacing={2}
                            className="additional-content-container"
                        >
                            <Grid item xs={12}>
                                <div className="project-links">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            aria-label="Open GitHub repository"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <FontAwesomeIcon
                                                className="project-icon"
                                                icon={faGithub}
                                            />
                                            <span>
                                                {project.githubLinkTitle}
                                            </span>
                                        </a>
                                    )}
                                    {project.websiteLink && (
                                        <a
                                            href={project.websiteLink}
                                            aria-label="Open website link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <FontAwesomeIcon
                                                className="project-icon"
                                                icon={faExternalLinkAlt}
                                            />
                                            <span>
                                                {project.websiteLinkTitle}
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </Grid>
                            <ImageGallery
                                additionalImages={project.additionalImages}
                            />
                        </Grid>
                    </div>
                )}
            </Card>
        </div>
    )
}

export default ProjectCard
