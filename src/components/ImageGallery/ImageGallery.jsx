import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'

import './../../sassStyles/components/_imageGallery.sass'

const ImageGallery = ({ additionalImages }) => {
    const [loadedImages, setLoadedImages] = useState([])

    useEffect(() => {
        const loadImage = async (name) => {
            try {
                const { default: imageUrl } = await import(
                    `../../assets/images/projects/${name}`
                )
                return imageUrl
            } catch (error) {
                console.error(`Failed to load image: ${name}`)
                return null
            }
        }

        const loadImagesFromUrls = async () => {
            if (!additionalImages || additionalImages.length === 0) {
                return
            }

            const loadedImagePromises = additionalImages.map(async (image) => {
                const loadedImageUrl = await loadImage(image.name)
                return {
                    caption: image.caption,
                    url: loadedImageUrl,
                }
            })

            const loadedImages = await Promise.all(loadedImagePromises)
            setLoadedImages(loadedImages)
        }

        loadImagesFromUrls()
    }, [additionalImages])

    if (!loadedImages || loadedImages.length === 0) {
        return null
    }

    return (
        <div className="additional-project-images-container">
            <Grid
                container
                spacing={2}
                className="additional-project-images-grid"
            >
                {loadedImages.map((image, index) => (
                    <Grid item key={index} sm={12} md={6}>
                        <img src={image.url} alt={image.caption} />
                        <p>{image.caption}</p>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ImageGallery
