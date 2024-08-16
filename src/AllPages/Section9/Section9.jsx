import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from "./index.module.css";
import uploadIcon from "../../Components/asset/Upload icon.png";

const Section9 = () => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            setFile(event.target.files[0]);
        } else {
            setFileName('');
            setFile(null);
        }
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleSubmit = () => {
        if (file) {

            setTimeout(() => {

                const existingImages = JSON.parse(localStorage.getItem('submittedImages')) || [];


                const newImage = { url: URL.createObjectURL(file), name: fileName };
                const updatedImages = [...existingImages, newImage];


                localStorage.setItem('submittedImages', JSON.stringify(updatedImages));

                console.log('File uploaded successfully');
                alert('Submit successful!');


                setFileName('');
                setFile(null);


                navigate('/submitted-images');
            }, 1000);
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div className={styles.upload}>
            <div className={styles.upload1}>
                <p className={styles.up}>Upload</p>
                <img src={uploadIcon} alt="Upload" className={styles.UploadIcon} />
                <label htmlFor="fileInput" className={styles.drag}>
                    Drag & Drop Or <span className={styles.browse}>Browse</span>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <p className={styles.support}>
                    Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                </p>
                <input
                    type="text"
                    value={fileName}
                    placeholder="No file chosen"
                    readOnly
                    className={styles.fileInputBox}
                />
                <button className={styles.uploadButton} onClick={handleButtonClick}>
                    Upload File
                </button>
            </div>
            <div>
                <button className={styles.submit} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Section9;
