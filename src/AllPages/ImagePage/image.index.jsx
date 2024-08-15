import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const SubmittedImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('submittedImages')) || [];
        setImages(storedImages);
    }, []);

    const handleDelete = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        localStorage.setItem('submittedImages', JSON.stringify(updatedImages));
        setImages(updatedImages);
    };

    return (
        <div className={styles.imageContainer}>
            {images.length > 0 ? (
                images.map((image, index) => (
                    <div key={index} className={styles.imageCardWrapper}>
                        <div className={styles.imageCard}>
                            <img src={image.url} alt={`Submitted ${index}`} />
                            <p>{image.name}</p>
                        </div>
                        <button className={styles.deleteButton} onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No images submitted yet.</p>
            )}
        </div>
    );
};

export default SubmittedImages;

