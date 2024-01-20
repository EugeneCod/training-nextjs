import { IPost } from '@/types';
import { FC } from 'react';

interface EditPostProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const posts: IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  return posts.map((post) => ({
    id: String(post.id),
  }))
}

const EditPost: FC<EditPostProps> = (props) => {
  const { params } = props;

  return <h1>Edit Post {params.id}</h1>;
};

export default EditPost;
