import React from 'react';
import './CoreCompetencies.css';

const CoreCompetencies = () => {
    const competencies = [
        // Data Analytics
        'SQL & Data Querying',
        'Data Analysis & Visualization',
        'HR Analytics',
        'Dashboard Development',
        'Power BI',
        'Data Cleaning & Preparation',
        // HR & People Ops
        'People Strategy',
        'Talent Management',
        'Employee Retention Analysis',
        'Workforce Planning',
        'Performance Management',
        'Employee Experience',
        'HRIS Management',
        'Compensation Analysis',
        'Stakeholder Communication',
        'Data-Driven Decision Making'
    ];

    return (
        <section id="competencies" className="section core-competencies-section">
            <div className="container">
                <h2 className="section-title">Core <span>Competencies</span></h2>
                <div className="competencies-grid">
                    {competencies.map((competency, index) => (
                        <div key={index} className="competency-item">
                            {competency}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCompetencies;
