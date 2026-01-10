import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">Gloria Arthur</h1>
                <h3 className="roles">
                    Data Analyst <span className="separator">|</span> CRM & Admin Manager <span className="separator">|</span> People Ops Professional
                </h3>
                <p className="bio">
                    HR & Data Analytics professional with 4+ years transforming recruitment operations and improving business processes. I turn complex data into actionable insights, optimize workflows, and drive measurable business results. Where data meets people strategy, growth follows.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        View Portfolio <ArrowRight size={20} />
                    </a>
                    <a href="/resume.pdf" className="btn btn-outline">
                        Resume <FileText size={20} />
                    </a>
                </div>
            </div>
            <div className="hero-glow"></div>
        </section>
    );
};

export default Hero;
