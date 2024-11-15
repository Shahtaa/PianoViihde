import React, { useState, useEffect } from 'react';
import axios from 'axios';  // For fetching data from the backend
import PianistGrid from './PianistGrid';  // Import PianistGrid to render the list

function PianistList() {
    const [pianists, setPianists] = useState([]);

    useEffect(() => {
        // Fetch pianist data from backend
        axios.get('http://localhost:3000/api/pianists')  // Replace with the correct API endpoint if needed
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