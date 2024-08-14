import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const SubmittedImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {

        const storedImages = JSON.parse(localStorage.getItem('submittedImages')) || [];
        setImages(storedImages);
    }, []);

    return (
        <div className={styles.imageContainer}>
            {images.length > 0 ? (
                images.map((image, index) => (
                    <div key={index} className={styles.imageCard}>
                        <img src={image.url} alt={`Submitted ${index}`} />
                        <p>{image.name}</p>
                    </div>
                ))
            ) : (
                <p>No images submitted yet.</p>
            )}
        </div>
    );
};

export default SubmittedImages;

