import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ChladniBackground from '../components/ChladniBackground';

const Home = () => {
    return (
        <div className="full-screen" style={{ overflow: 'hidden' }}>
            <ChladniBackground />

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 5vw',
                boxSizing: 'border-box',
                pointerEvents: 'none' // Allow clicks to pass through to canvas
            }}>
                <div style={{ pointerEvents: 'auto' }}>
                    <h1 className="fade-shadow" style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: 600,
                        margin: 0
                    }}>
                        McNair Shah
                    </h1>
                </div>

                <nav style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'right',
                    pointerEvents: 'auto'
                }}>
                    <Link to="/about" className="fade-shadow" style={{ fontSize: '1.2rem' }}>About Me</Link>
                    <Link to="/blog" className="fade-shadow" style={{ fontSize: '1.2rem' }}>Blog</Link>
                    <Link to="/projects" className="fade-shadow" style={{ fontSize: '1.2rem' }}>Projects</Link>
                </nav>
            </div>
        </div>
    );
};

export default Home;
