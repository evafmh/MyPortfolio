import React from 'react'
import { Grid, Card, CardMedia, CardContent } from '@mui/material'

const Gallery = ({ projects }) => {
    return (
        <Grid container spacing={2}>
            {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className="project-card">
                        <CardMedia
                            component="img"
                            src={project.image}
                            alt={project.title}
                        />
                        <CardContent>
                            <h3>{project.subtitle}</h3>
                            <p className="project-description">
                                {project.shortDescription}
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Gallery
