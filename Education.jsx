import React from 'react';
import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'Master of Business Administration (MBA)',
            field: 'Human Resources Management/Personnel Administration',
            institution: 'University of Cape Coast',
            location: 'Cape Coast, Ghana',
            period: 'Nov 2023 - Sep 2025',
            grade: 'Grade: 3.7',
            highlights: [
                "Dean's Award – Highest CGPA in Postgraduate HR Program"
            ]
        },
        {
            degree: 'Bachelor of Arts (BA)',
            field: 'Psychology',
            institution: 'University of Ghana',
            location: 'Accra, Ghana',
            period: 'May 2016 - Aug 2020',
            grade: 'Grade: 3.64',
            highlights: []
        }
    ];

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3 className="education-degree">{edu.degree}</h3>
                            <p className="education-institution">{edu.institution}</p>
                            <p className="education-period">{edu.period}</p>
                            {edu.highlights.length > 0 && (
                                <ul className="education-highlights">
                                    {edu.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex}>{highlight}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
