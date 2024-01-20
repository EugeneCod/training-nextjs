import { Metadata } from 'next';
import Link from 'next/link';
import { IPost } from '@/types';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error('Unable to fetch posts!')
  return response.json();
}

export const metadata: Metadata = {
  title: 'About | Training Next App',
};

const Blog = async () => {
  const posts: IPost[] = await getData();

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Blog page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
