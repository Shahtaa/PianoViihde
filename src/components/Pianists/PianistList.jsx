import React, { useState, useEffect } from 'react';
import axios from 'axios';  // For fetching data from the backend
import PianistGrid from './PianistGrid';  // Import PianistGrid to render the list

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

function PianistList() {
    const [pianists, setPianists] = useState([]);

    useEffect(() => {
        // Fetch pianist data from backend
        axios.get(`${API_BASE_URL}/api/pianists`)  // Replace with the correct API endpoint if needed
            .then(response => {
                setPianists(response.data);  // Set the fetched data into state
            })
            .catch(error => {
                console.error("There was an error fetching the pianists data:", error);
            });
    }, []);

    return (
        <PianistGrid pianists={pianists} />
    );
}

export default PianistList;