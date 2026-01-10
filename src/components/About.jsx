import React from 'react';
import './About.css';

const About = () => {

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About <span>Me</span></h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a versatile professional with 4+ years of experience across Healthcare and Recruitment, where I've combined 
                            data analytics, HR management, and CRM administration to deliver measurable results. My career has been defined 
                            by creating systems that improve efficiency, compliance, and customer experience, whether through technology, 
                            analytics, or people-centered management.
                        </p>
                        <p>
                            Some highlights include coordinating end-to-end international recruitment and onboarding processes, auditing and 
                            restructuring filing systems to achieve 100% compliance with international regulations, building and automating 
                            CRM workflows that boost team productivity, and executing data analysis using Python, SQL, and Power BI to transform 
                            raw data into actionable insights.
                        </p>
                        <p>
                            My educational foundation includes a BA in Psychology, an MBA in Human Resources Management (Grade: 3.7), and 
                            certifications in Data Analytics, Excel, SQL, and Salesforce CRM. I'm a <a href="https://www.salesforce.com/trailblazer/gbjy6hcr9y66lh66g0" target="_blank" rel="noopener noreferrer" className="link-accent">Salesforce Trailblazer Ranger</a>, demonstrating 
                            my commitment to continuous learning and expertise in Salesforce platforms. This enables me to bridge human and technical 
                            perspectives to solve business challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
