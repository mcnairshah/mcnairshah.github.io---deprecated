import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import { getPostBySlug } from '../utils/posts';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostBySlug(slug).then(setPost);
    }, [slug]);

    if (!post) {
        return (
            <Layout title="Loading...">
                <p>Loading post...</p>
            </Layout>
        );
    }

    return (
        <Layout title={post.title}>
            <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '5rem' }}>
                <p style={{ color: '#666', marginBottom: '2rem' }}>{post.date}</p>
                <div className="markdown-content" style={{ lineHeight: '1.6' }}>
                    <Markdown>{post.content}</Markdown>
                </div>
                <div style={{ marginTop: '3rem' }}>
                    <Link to="/blog" className="fade-shadow">← Back to Blog</Link>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPost;
