import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getPosts } from '../utils/posts';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    return (
        <Layout title="Blog">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {posts.map(post => (
                    <div key={post.slug} className="post-preview">
                        <Link to={`/blog/${post.slug}`} style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="fade-shadow">
                            {post.title}
                        </Link>
                        <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>{post.date}</p>
                        <p>{post.description}</p>
                    </div>
                ))}
                {posts.length === 0 && <p>No posts found.</p>}
            </div>
        </Layout>
    );
};

export default Blog;
