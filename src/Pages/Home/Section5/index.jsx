import React, { useState } from 'react';
import styles from './index.module.css';
import uploadIcon from './../../../asset/Upload icon.png';

const Section5 = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        setFileName(event.target.files[0].name);
    };

    return (
        <div className={styles.upload}>
            <div className={styles.upload1}>
                <p className={styles.up}>Upload</p>
                <img src={uploadIcon} alt="Upload" className={styles.UploadIcon} />
                <label htmlFor="fileInput" className={styles.drag}>
                    Drag & Drop Or <span className={styles.browse}>Browse</span>
                </label>
                <input type="file" id="fileInput" name="file" style={{ display: 'none' }} onChange={handleFileChange} />
                <p className={styles.support}>Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                <input
                    type="text"
                    value={fileName}
                    placeholder="No file chosen"
                    readOnly
                    className={styles.fileInputBox}
                />
            </div>
        </div>
    );
}

export default Section5;
