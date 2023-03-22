type Post = {
  id: string;
  name: string;
  content: string;
  selected?: boolean;
};

type Props = {
  refs: { [key: string]: React.RefObject<HTMLLIElement> };
  posts: Post[];
  selectedPost: Post | null;
  onPostSelected: (post: Post) => void;
};

const PostDetailList: React.FC<Props> = ({
  refs,
  posts,
  selectedPost,
  onPostSelected,
}) => {
  const handlePostClick = (post: Post) => {
    onPostSelected(post);
  };

  return (
    <div className="post-detail-wrapper">
      <ul className="post-detail-list">
        {posts.map((post) => (
          <li
            key={post.id}
            ref={refs[post.id]}
            className={`post-container ${
              selectedPost && selectedPost.id === post.id ? "selected" : ""
            }`}
            onClick={() => handlePostClick(post)}
          >
            <h3>{post.name}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetailList;
