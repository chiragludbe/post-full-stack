import { Post } from '@/app/page';

export default async function Page({ params }: { params: Promise<{ slug: string }>; }) {
    let post: Post | null = null;
    const { slug } = await params;
    console.log('Fetching post with slug:', slug);
    
    try {
        const response = await fetch(`http://localhost:5000/api/posts/${slug}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        post = await response.json();
    } catch (error) {
        console.error('Error fetching post:', error);
    }

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
            <p>By {post?.author.name} on {post ? new Date(post.published_at).toLocaleDateString() : ''}</p>
        </div>
    );
}