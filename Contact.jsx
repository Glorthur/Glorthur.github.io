import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In <span>Touch</span></h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><Mail size={20} /></div>
                                <span>gloriaesibekyere.arthur@gmail.com</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/gloria-arthur-536070150" target="_blank" rel="noopener noreferrer" className="social-btn"><Linkedin size={22} /></a>
                            <a href="https://github.com/Glorthur" target="_blank" rel="noopener noreferrer" className="social-btn"><Github size={22} /></a>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
