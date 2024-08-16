import React, { useState } from 'react';
import styles from './index.module.css';

const GenerateWasteReport = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [report, setReport] = useState(null);
    const [error, setError] = useState(null);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!startDate || !endDate) {
            setError('Both start date and end date are required.');
            setReport(null);
            return;
        }


        const simulatedReport = {
            reportTitle: "Waste Report",
            startDate,
            endDate,
            totalWaste: Math.floor(Math.random() * 1000) + " kg",
            wasteDetails: [
                { type: "Paper", quantity: Math.floor(Math.random() * 100) + " kg" },
                { type: "Plastic", quantity: Math.floor(Math.random() * 100) + " kg" },
                { type: "Organic", quantity: Math.floor(Math.random() * 100) + " kg" },
            ],
        };

        setReport(simulatedReport);
        setError(null);
    };

    return (
        <div className={styles.generateWasteReport}>
            <h1>Generate Waste Report</h1>
            <form onSubmit={handleSubmit} className={styles.generateWasteReportForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={handleStartDateChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={handleEndDateChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.generateWasteReportSubmit}>Generate Report</button>
            </form>

            {report && (
                <div className={styles.reportMessage}>
                    <h3>{report.reportTitle}</h3>
                    <p><strong>Period:</strong> {report.startDate} to {report.endDate}</p>
                    <p><strong>Total Waste:</strong> {report.totalWaste}</p>
                    <h4>Waste Details:</h4>
                    <ul>
                        {report.wasteDetails.map((item, index) => (
                            <li key={index}>
                                <strong>Type:</strong> {item.type} <br />
                                <strong>Quantity:</strong> {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {error && (
                <div className={styles.errorMessage}>
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default GenerateWasteReport;

