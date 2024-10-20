import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2>My Resume</h2>
            {/* Embed the PDF using the embed tag */}
            <embed
                src={`${process.env.PUBLIC_URL}/resume.pdf`}
                type="application/pdf"
                width="100%"
                height="800px"
            />
        </div>
    );
};

export default Resume;