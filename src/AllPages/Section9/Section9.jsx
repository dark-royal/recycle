import React, { useState } from "react";
import styles from "./index.module.css";
import uploadIcon from "../../Components/asset/Upload icon.png";

const Section9 = () => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);

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
            // Handle file upload logic here
            const formData = new FormData();
            formData.append('file', file);

            // Example: Make a POST request to upload the file
            fetch('/upload-endpoint', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    // Handle success response
                    console.log('File uploaded successfully:', data);
                })
                .catch(error => {
                    // Handle error response
                    console.error('Error uploading file:', error);
                });
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
}

export default Section9;