type Post = {
  id: string;
  name: string;
  content: string;
  selected?: boolean;
};

type Props = {
  posts: Post[];
  selectedPost: Post | null;
};

const PostList: React.FC<Props> = ({ posts, selectedPost }) => {
  return (
    <div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.name}</h3>
            {selectedPost?.id === post.id && <p>Selected</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
