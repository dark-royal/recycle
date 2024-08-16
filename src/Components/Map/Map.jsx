import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 19.076, // Example latitude
    lng: 72.8777, // Example longitude
};

const MapComponent = () => {
    const [markers, setMarkers] = useState([
        { lat: 19.076, lng: 72.8777, title: 'Location 1' },
        { lat: 19.1, lng: 72.9, title: 'Location 2' },
        // Add more locations as needed
    ]);

    return (
        <LoadScript googleMapsApiKey="AIzaSyBvMXbWKc6XCjX0c6dyUtMDAFrTW0y0fn8">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {markers.map((marker, index) => (
                    <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;