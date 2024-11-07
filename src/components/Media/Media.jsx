// src/components/Media.jsx
import React from 'react';

function Media() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Media</h1>
            <p>Explore our media content including videos, images, and more.</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe
                    src="https://www.youtube.com/embed/g2FaY0TXzbA"
                    title="Example Video"
                    width="600"
                    height="400"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Media;