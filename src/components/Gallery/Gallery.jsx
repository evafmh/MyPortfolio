import React, { useEffect, useState } from 'react'
import { Grid, Button } from '@mui/material'
import ProjectCard from '../ProjectCard/ProjectCard'

import './../../sassStyles/components/_gallery.sass'

const Gallery = ({ projects, header, id }) => {
    const [selectedCategory, setSelectedCategory] = useState('all')
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
                        <ProjectCard
                            project={project}
                            expanded={index === expandedCard}
                            onCardClick={() => handleCardClick(index)}
                            onCloseCard={handleCloseCard}
                            imagePaths={imagePaths}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Gallery
