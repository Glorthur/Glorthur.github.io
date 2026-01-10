import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
    const skills = [
        'SQL', 'Python', 'Power BI', 'Excel', 'Salesforce CRM', 'HRIS',
        'Google Workspace', 'Microsoft Office', 'Trello', 'Canva',
        'Data Visualization', 'Statistical Analysis', 'Process Automation',
        'Data Analysis', 'HR Analytics', 'Worldplay CRM'
    ];

    return (
        <section id="skills" className="section technical-skills-section">
            <div className="container">
                <h2 className="section-title">Technical <span>Skills</span></h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-text">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
