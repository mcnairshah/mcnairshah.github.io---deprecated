import matter from 'gray-matter';

export async function getPosts() {
    // UPDATED: Use query params for raw import as per Vite warning
    const modules = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default' });
    const posts = [];

    console.log('Modules found:', Object.keys(modules));

    for (const path in modules) {
        try {
            const rawContent = await modules[path]();
            // console.log('Raw content loaded for:', path);

            const { data, content } = matter(rawContent);
            const slug = path.split('/').pop().replace('.md', '');

            posts.push({
                slug,
                ...data,
                content,
            });
        } catch (error) {
            console.error(`Error loading or parsing post at ${path}:`, error);
        }
    }

    console.log('Final posts array:', posts);
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}
