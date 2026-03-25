import Image from "next/image";

export interface Post {
    id: number;
    title: string;
    content: string;
    slug: string;
    excerpt: string;
    published_at: string;
    tags: string[];
    author: {
        name: string;
        email: string;
    };
}

export default async function Home() {
    let posts: Post[] = [];
    try {
        const response = await fetch('http://localhost:5000/api/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        posts = await response.json();

    } catch (error) {
        console.error('Error fetching posts:', error);
    }

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts && posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <p>By {post.author.name} on {new Date(post.published_at).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
}
