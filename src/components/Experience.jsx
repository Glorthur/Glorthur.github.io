import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Project Manager & Operations Lead (Founder\'s Office)',
            company: 'Intuitive Neurons',
            location: 'Remote (Germany)',
            period: 'Oct 2025 - Present',
            description: 'Drive project execution across engineering, product, and client delivery teams, maintaining visibility on timelines, dependencies, and cross-functional alignment. Coordinate with internal stakeholders and external R&D partners across Africa, America, European and Indian Markets, tracking project milestones and proactively addressing blockers. Support talent acquisition and onboarding processes, contributing to team growth and streamlining performance review cycles. Build strategic relationships with customers, academic institutions, businesses, and government entities across Africa to support market expansion.'
        },
        {
            role: 'Agile People Operations Leader',
            company: 'Culturelligence',
            location: 'Remote',
            period: 'Jun 2025 - Feb 2026',
            description: 'Recruited and onboarded new hires for a remote, international team, ensuring smooth integration into company workflows. Conducted research on modern Talent Management and HR practices, and presented actionable insights to the leadership team. Led the in-house implementation of new HR processes and practices, aligning workflows with Agile PeopleOps methods. Applied Kanban tools to map workflows, with exposure to the Agile PeopleOps Framework™ for HR innovation.'
        },
        {
            role: 'Human Resource & Administrative Manager',
            company: 'Ovance International',
            location: 'Remote (U.K)',
            period: 'Jun 2022 - Aug 2025',
            description: 'Coordinated end-to-end international recruitment and onboarding including documentation and system setup. Audited and restructured the company\'s filing system to meet legal standards, resulting in 100% compliance with UK regulations and improved document retrieval efficiency by 25%. Identified delays in customer response times and implemented a round-the-clock support protocol using CRM tools, achieving consistent, quick response rates. Built and automated CRM workflows and pipelines to address operational bottlenecks, resulting in increased overall team productivity. Streamlined scheduling processes and reduced meeting conflicts by 40%.'
        },
        {
            role: 'Data Analyst Trainee',
            company: 'Generation Ghana',
            location: 'Remote (Ghana)',
            period: 'Jan 2025 - Apr 2025',
            description: 'Executed data analysis using Python and SQL, extracting actionable insights from large datasets. Designed and delivered interactive Power BI dashboards that visualized complex business metrics for key stakeholders. Improved data quality and accuracy through systematic cleaning, validation, and transformation processes. Applied statistical techniques on cross-functional projects to support data-driven decision-making.'
        },
        {
            role: 'Administrative Officer',
            company: 'Agenvo LTD',
            location: 'Remote (U.K)',
            period: 'Jul 2023 - Jan 2025',
            description: 'Managed administrative operations and supported organizational processes in a remote work environment.'
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Professional <span>Experience</span></h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="exp-header">
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <span className="exp-company">{exp.company}</span>
                                </div>
                                <div className="exp-meta">
                                    <span className="exp-period"><Calendar size={14} /> {exp.period}</span>
                                    <span className="exp-location"><MapPin size={14} /> {exp.location}</span>
                                </div>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
