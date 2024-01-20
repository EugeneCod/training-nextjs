import { IPost } from '@/types';
import { Metadata } from 'next';
import { FC } from 'react';

interface PostProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const posts: IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  return posts.map((post) => ({
    id: String(post.id),
  }))
}

export async function generateMetadata(props: PostProps): Promise<Metadata> {
  const post: IPost = await getPost(props.params.id)
  return {
    title: post.title,
  };
}

// Несколько версий этой страницы будет статично сгенерировано,
// используя 'params', возвращенные из generateStaticParams
const Post: FC<PostProps> = async (props) => {
  const { params } = props;
  const post: IPost = await getPost(params.id);
  return (
    <>
      <h1>Post Page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
