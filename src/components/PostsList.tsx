import { useState } from "react";
import { Post } from "@/types";

type Props = {
  posts: Post[];
  selectedPost: Post | null;
  onPostSelected: (post: Post) => void;
  onSearchTextChange: (searchText: string) => void;
};

const PostList: React.FC<Props> = ({
  posts,
  selectedPost,
  onPostSelected,
  onSearchTextChange,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    onSearchTextChange(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter posts"
        className="post-filter"
        value={searchText}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li
              key={post.id}
              className={post === selectedPost ? "selected" : ""}
              onClick={() => onPostSelected(post)}
            >
              <h3>{post.name}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
