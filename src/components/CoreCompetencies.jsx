import React from 'react';
import './CoreCompetencies.css';

const CoreCompetencies = () => {
    const competencies = [
        'Strategic HR Management',
        'People Strategy',
        'HR Policies & Procedures',
        'Organizational Development',
        'Talent Management',
        'Recruitment & Onboarding',
        'Performance Management',
        'Employee Relations',
        'HR Operations',
        'Payroll & Benefits Administration',
        'HR Compliance',
        'HRIS Management',
        'Leadership & Team Management',
        'Employee Engagement',
        'Excellent Communication',
        'Stakeholder Advisory',
        'Problem Solving'
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
