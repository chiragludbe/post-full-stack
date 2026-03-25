
const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.', slug: 'first-post', excerpt: 'This is the first post.', published_at: '2024-06-01T12:00:00Z', tags: ['tag1', 'tag2'], author: { name: 'John Doe', email: 'john.doe@example.com' } },
    { id: 2, title: 'Second Post', content: 'This is the second post.', slug: 'second-post', excerpt: 'This is the second post.', published_at: '2024-06-01T12:00:00Z', tags: ['tag2', 'tag3'], author: { name: 'Jane Smith', email: 'jane.smith@example.com' } },
    { id: 3, title: 'Third Post', content: 'This is the third post.', slug: 'third-post', excerpt: 'This is the third post.', published_at: '2024-06-01T12:00:00Z', tags: ['tag3', 'tag4'], author: { name: 'Bob Johnson', email: 'bob.johnson@example.com' } }
  ];

export function createPost(req, res) {
    const { title, content, slug, excerpt, published_at, tags, author } = req.body;
    const post = posts.find(p => p.slug === slug);
    if (post) {
        return res.status(400).json({ message: 'Slug must be unique' });
    }
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        slug,
        excerpt,
        published_at,
        tags,
        author
    };
    posts.push(newPost);
    res.status(201).json({ message: 'Post created successfully' });
}

export function getPosts(req, res) {
    res.json(posts);
}

export function getPostBySlug(req, res) {
    const slug = req.params.slug;
    const post = posts.find(p => p.slug === slug);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
}