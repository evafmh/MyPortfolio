import React, { useEffect, useState } from 'react'
import { Grid, Card, CardMedia, CardContent, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './../../sassStyles/components/_gallery.sass'

const Gallery = ({ projects, header, id }) => {
    const [selectedCategory, setSelectedCategory] = React.useState('all')
    const [expandedCard, setExpandedCard] = useState(null)
    const [imagePaths, setImagePaths] = useState({})

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              )

    // Vérification pour forcer la sélection de la catégorie "all" si la liste filtrée est vide
    if (filteredProjects.length === 0 && selectedCategory !== 'all') {
        setSelectedCategory('all')
    }

    const handleCardClick = (index) => {
        setExpandedCard(index === expandedCard ? null : index)
    }

    const handleCloseCard = () => {
        setExpandedCard(null)
    }

    useEffect(() => {
        const loadImagePaths = async () => {
            const paths = await Promise.all(
                projects.map(async (project) => {
                    try {
                        const module = await import(
                            `../../assets/images/projects/${project.image}`
                        )
                        return { id: project.title, path: module.default }
                    } catch (error) {
                        console.error(`Failed to load image: ${project.image}`)
                        return null
                    }
                })
            )

            const imagePathsObj = paths.reduce((obj, item) => {
                if (item) {
                    obj[item.id] = item.path
                }
                return obj
            }, {})

            setImagePaths(imagePathsObj)
        }

        loadImagePaths()
    }, [projects])

    return (
        <div className="my-projects-section" id={id}>
            <div className="projects-header">
                <h2 className="projects-header-title">{header.title}</h2>
                <div className="filter-buttons-container">
                    <Button
                        className="filter-button"
                        onClick={() => setSelectedCategory('all')}
                        variant={
                            selectedCategory === 'all'
                                ? 'contained'
                                : 'outlined'
                        }
                    >
                        {header.allCategories}
                    </Button>
                    {header.categories.map((category, index) => (
                        <Button
                            className="filter-button"
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            variant={
                                selectedCategory === category
                                    ? 'contained'
                                    : 'outlined'
                            }
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <Grid className="projects-gallery" container spacing={2}>
                {filteredProjects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            className={`project-card${
                                index === expandedCard ? ' active' : ''
                            }`}
                            data-category={project.category}
                            onClick={() => handleCardClick(index)}
                        >
                            {index === expandedCard && (
                                <div
                                    className="close"
                                    onClick={handleCloseCard}
                                >
                                    <FontAwesomeIcon
                                        className="close-icon"
                                        icon={faCircleXmark}
                                    />{' '}
                                </div>
                            )}
                            <CardMedia
                                className="project-image"
                                component="img"
                                src={imagePaths[project.title] || ''}
                                alt={project.title}
                            />
                            <CardContent className="project-content">
                                {index === expandedCard ? (
                                    <>
                                        <h3 className="project-title expanded">
                                            {project.title}
                                        </h3>
                                        <div className="project-technologies expanded">
                                            {project.technologiesUsed.map(
                                                (technology, index) => (
                                                    <span
                                                        key={index}
                                                        className="project-technologies-keyword"
                                                    >
                                                        {technology}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                        <p className="project-description expanded">
                                            {project.detailedDescription}
                                        </p>
                                        <div className="project-links">
                                            {project.githubLink && (
                                                <a
                                                    href={project.githubLink}
                                                    aria-label="Open GitHub repository"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon
                                                        className="project-icon"
                                                        icon={faGithub}
                                                    />
                                                    <span>
                                                        {
                                                            project.githubLinkTitle
                                                        }
                                                    </span>
                                                </a>
                                            )}
                                            {project.websiteLink && (
                                                <a
                                                    href={project.websiteLink}
                                                    aria-label="Open website link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon
                                                        className="project-icon"
                                                        icon={faExternalLinkAlt}
                                                    />
                                                    <span>
                                                        {
                                                            project.websiteLinkTitle
                                                        }
                                                    </span>
                                                </a>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="project-title">
                                            {project.subtitle}
                                        </h3>
                                        <div className="project-technologies">
                                            {project.technologiesUsed.length > 0
                                                ? project.technologiesUsed.map(
                                                      (technology, index) => (
                                                          <span
                                                              key={index}
                                                              className="project-technologies-keyword"
                                                          >
                                                              {technology}
                                                          </span>
                                                      )
                                                  )
                                                : project.keywords.map(
                                                      (keyword, index) => (
                                                          <span
                                                              key={index}
                                                              className="project-technologies-keyword"
                                                          >
                                                              {keyword}
                                                          </span>
                                                      )
                                                  )}
                                        </div>

                                        <p className="project-description">
                                            {project.shortDescription}
                                        </p>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Gallery
