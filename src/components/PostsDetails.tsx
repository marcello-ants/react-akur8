type Post = {
  id: string;
  name: string;
  content: string;
  selected?: boolean;
};

type Props = {
  posts: Post[];
  selectedPost: Post | null;
  onPostSelected: (post: Post) => void;
};

const PostDetailList: React.FC<Props> = ({
  posts,
  selectedPost,
  onPostSelected,
}) => {
  const handlePostClick = (post: Post) => {
    onPostSelected(post);
  };

  return (
    <div className="post-detail-list">
      {selectedPost ? (
        <div className="selected-post-container">
          <div className="selected-post">
            <h2>{selectedPost.name}</h2>
            <p>{selectedPost.content}</p>
          </div>
        </div>
      ) : (
        <p>No post selected</p>
      )}
      <div className="post-list">
        {posts.map((post) => (
          <div
            className={`post-container ${
              selectedPost && selectedPost.id === post.id ? "selected" : ""
            }`}
            key={post.id}
            onClick={() => handlePostClick(post)}
          >
            <h3>{post.name}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetailList;
