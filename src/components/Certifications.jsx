import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            name: 'Human Resources Analytics',
            issuer: 'University of California, Irvine',
            date: '2025'
        },
        {
            name: 'Microsoft Power Platform',
            issuer: 'Coursera',
            date: '2025'
        },
        {
            name: 'Microsoft Power Platform and Microsoft Power Automate',
            issuer: 'Coursera',
            date: '2025'
        },
        {
            name: 'AI Engineer Agentic Track',
            issuer: 'Udemy',
            date: '2025'
        },
        {
            name: 'Certified Salesforce Administrator',
            issuer: 'Salesforce',
            date: '2025'
        },
        {
            name: 'Google Data Analytics Professional Certificate',
            issuer: 'Coursera',
            date: '2022'
        },
        {
            name: 'Certified Data Analyst',
            issuer: 'ALX',
            date: '2025'
        },
        {
            name: 'Compensation and Benefits Analyst',
            issuer: 'Coursera',
            date: '2024'
        }
    ];

    return (
        <section id="certifications" className="section certifications-section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <h3 className="cert-name">{cert.name}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
