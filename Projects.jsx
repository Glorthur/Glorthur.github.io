import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'HR Performance Intelligence: From Data to Decision Making',
            description: 'Comprehensive HR analytics project analyzing 497,000+ employee records to uncover workforce patterns and cost drivers. Through SQL and Power BI, identified a $32.5M–$130M cost avoidance opportunity by addressing an 87% operational turnover concentration and $7,000 systematic pay gap. Delivers executive-ready insights with quantified business impact, tiered action plans, and strategic recommendations.',
            tags: ['SQL', 'Power BI', 'HR Analytics', 'Data Analysis'],
            github: 'https://github.com/Glorthur',
            live: 'https://glorthur.notion.site/HR-PERFORMANCE-INTELLIGENCE-FROM-DATA-TO-DECISION-MAKING-292a978668cd8055aa13c4f570f45710',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=90'
        },
        {
            title: 'Online Retail Analysis - Customer Lifetime Value & Retention',
            description: 'Customer Lifetime Value and Retention Analysis using RFM metrics. Identified high-value vs at-risk customers, analyzed purchase timing patterns, and developed segment-specific retention strategies. Applied RFM segmentation to categorize customers as Champions, Loyal, At Risk, Can\'t Lose, and others, with Champions generating 81% of total revenue despite being only 21% of the customer base.',
            tags: ['Excel', 'SQL', 'Data Analysis', 'Customer Analytics', 'RFM Analysis'],
            github: 'https://github.com/Glorthur/Online_Retail_Analysis',
            live: 'https://valuable-rosehip-356.notion.site/UCI-Online-Retail-Analysis-1c1a978668cd80f3820ed6f259d72afd',
            imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&q=90'
        },
        {
            title: 'BrightPath Healthcare Staffing Case Study',
            description: 'Comprehensive case study analyzing healthcare staffing patterns, workforce optimization, and operational efficiency. Applied data analytics to identify staffing gaps, optimize resource allocation, and improve patient care delivery through data-driven staffing strategies.',
            tags: ['Data Analysis', 'Healthcare Analytics', 'Staffing Optimization', 'Case Study'],
            github: 'https://github.com/Glorthur',
            live: 'https://glorthur.notion.site/BrightPath-Healthcare-Staffing-Case-Study-2bfa978668cd80ec940cf0c1fe6c7138',
            imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop&q=90'
        },
        {
            title: 'Workforce Patterns and Trends Analysis',
            description: 'Analyzed workforce patterns and identified emerging trends to help optimize resource allocation and staffing strategies. Applied SQL queries and data visualization techniques to support strategic HR decision-making.',
            tags: ['SQL', 'Data Visualization', 'HR Analytics', 'DataCamp'],
            github: 'https://github.com/Glorthur/workforce-analysis',
            live: 'https://www.datacamp.com/datalab/w/17113e5a-d6f2-4d24-9164-c4d878719f0c/edit',
            graphUrl: 'https://visualize.graphy.app/view/89e84b84-eaef-4350-8828-81391bb11a9b'
        },
        {
            title: 'HR Analytics: Exploratory Data Analysis',
            description: 'Conducted exploratory data analysis on HR dataset to identify key factors affecting employee retention and performance. Utilized Python for data analysis and visualization to uncover patterns and trends.',
            tags: ['Python', 'Data Analysis', 'Visualization', 'HR Analytics'],
            github: 'https://github.com/Glorthur/hr-analytics',
            live: 'https://valuable-rosehip-356.notion.site/HR-Analytics-Project-Exploratory-Data-Analysis-1b2a978668cd80f69e3ede7763763a91?pvs=4',
            graphUrl: 'https://visualize.graphy.app/view/a56cdba1-51ec-42e1-a796-5f26c5f355d3'
        },
        {
            title: 'HR CRM Implementation Project',
            description: 'End-to-end Salesforce data modeling, security architecture, process automation, and data governance for enterprise HR management. Designed custom Employee object with 27 strategic fields, multi-tier role hierarchy spanning 30 organizational positions, four-profile security model with field-level permissions, and automated workflows reducing promotion approval times from 5-7 days to same-day decisions.',
            tags: ['Salesforce CRM', 'Process Automation', 'HRIS', 'Data Modeling'],
            github: 'https://github.com/Glorthur',
            live: 'https://glorthur.notion.site/HR-CRM-Implementation-Project-27ba978668cd80fba94dc807ffa4d626',
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=90'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured <span>Projects</span></h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {(project.graphUrl || project.imageUrl) && (
                                <div className="project-image">
                                    {project.graphUrl ? (
                                        <>
                                            <iframe 
                                                className="project-iframe" 
                                                src={project.graphUrl} 
                                                allowFullScreen
                                                title={project.title}
                                            ></iframe>
                                            <a href={project.graphUrl} target="_blank" rel="noopener noreferrer" className="view-full-graph">
                                                View Full Graph
                                            </a>
                                        </>
                                    ) : (
                                        <img 
                                            src={project.imageUrl} 
                                            alt={project.title}
                                            className="project-img"
                                        />
                                    )}
                                </div>
                            )}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn"><Github size={20} /> Code</a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn"><ExternalLink size={20} /> View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
