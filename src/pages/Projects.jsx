import Layout from '../components/Layout';

const Projects = () => {
    return (
        <Layout title="Projects">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{ border: '1px solid #333', padding: '1.5rem', borderRadius: '8px' }}>
                    <h3>Project One</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>Description of project one.</p>
                </div>
                <div style={{ border: '1px solid #333', padding: '1.5rem', borderRadius: '8px' }}>
                    <h3>Project Two</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>Description of project two.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
