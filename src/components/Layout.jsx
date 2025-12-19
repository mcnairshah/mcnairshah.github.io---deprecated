import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ title, children }) => {
    return (
        <div className="layout-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                <Link to="/" className="fade-shadow" style={{ fontSize: '1.2rem', fontWeight: 600 }}>McNair Shah</Link>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/about" className="fade-shadow">About</Link>
                    <Link to="/blog" className="fade-shadow">Blog</Link>
                    <Link to="/projects" className="fade-shadow">Projects</Link>
                </nav>
            </header>

            <main>
                <h1 className="fade-shadow" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{title}</h1>
                <div style={{ lineHeight: '1.6' }}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
