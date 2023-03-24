import { Post } from "@/types";
import XIcon from "@/components/XIcon";

type Props = {
  refs: { [key: string]: React.RefObject<HTMLLIElement> };
  posts: Post[];
  selectedPost: Post | null;
  onPostSelected: (post: Post) => void;
  onPostRemoved: (post: Post) => void;
  onAddEvent: (name: string, type: "created" | "removed", date: Date) => void;
};

const PostDetailList: React.FC<Props> = ({
  refs,
  posts,
  selectedPost,
  onPostSelected,
  onPostRemoved,
  onAddEvent,
}) => {
  const handlePostClick = (post: Post) => {
    onPostSelected(post);
  };

  const handlePostRemove = (event: React.MouseEvent, post: Post) => {
    event.stopPropagation();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmDelete) {
      onPostRemoved(post);
      onAddEvent(post.name, "removed", new Date());
    }
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
            <div className="post-detail-title">
              <h3>{post.name}</h3>
              <div
                className="remove-icon"
                onClick={(event) => handlePostRemove(event, post)}
              >
                <XIcon />
              </div>
            </div>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetailList;
