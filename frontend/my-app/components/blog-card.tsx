import React from 'react';
import { Post } from '@/app/page';

export default function BlogCard({ post }: { post: Post }) {
    return (
        <div className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <p>By {post.author.name} on {new Date(post.published_at).toLocaleDateString()}</p>
        </div>
    );
}