import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './index.module.css';
import uploadIcon from '../../Components/asset/Upload icon.png';

const Section5 = () => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            setFile(event.target.files[0]);
            setImageURL(URL.createObjectURL(event.target.files[0]));
        } else {
            setFileName('');
            setFile(null);
            setImageURL('');
        }
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleSubmit = async () => {
        if (file) {
            try {
                // Create a FormData object to send multipart/form-data
                const formData = new FormData();
                formData.append('file', file); // Append the file
                formData.append('name', fileName); // Append any additional fields if needed

                // Send a POST request to the backend API
                const response = await fetch('http:// http://localhost:8080/api/v1/waste', {
                    method: 'POST',
                    body: formData,

                });

                if (response.ok) {
                    setUploadStatus('Submit successful!');
                    setFileName('');
                    setFile(null);
                    setImageURL('');

                    // Navigate or refresh the image list
                    navigate('/submitted-images');
                } else {
                    const error = await response.text();
                    setUploadStatus(`Upload failed: ${error}`);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadStatus('Upload failed.');
            }
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
                <p className={styles.support}>Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
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
            {imageURL && (
                <div className={styles.imagePreview}>
                    <h3>Preview:</h3>
                    <img src={imageURL} alt="Uploaded" className={styles.previewImage} />
                </div>
            )}
            {uploadStatus && (
                <div className={styles.uploadStatus}>
                    <p>{uploadStatus}</p>
                </div>
            )}
        </div>
    );
};

export default Section5;

