import { FC } from 'react';

interface EditPostProps {
  params: {
    id: string;
  };
}

const EditPost: FC<EditPostProps> = (props) => {
  const { params } = props;

  return <h1>Edit Post {params.id}</h1>;
};

export default EditPost;
