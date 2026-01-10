import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            borderTop: '1px solid var(--border)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginTop: 'auto'
        }}>
            <p>&copy; {new Date().getFullYear()} Gloria Arthur. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
