import { useState } from "react";
import { Post } from "@/types";

type Props = {
  posts: Post[];
  selectedPost: Post | null;
  onSelectPost: (post: Post) => void;
};

const PostList: React.FC<Props> = ({ posts, selectedPost, onSelectPost }) => {
  const [searchText, setSearchText] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter posts"
        className="post-filter"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {filteredPosts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <ul className="post-list">
          {filteredPosts.map((post) => (
            <li
              key={post.id}
              className={post === selectedPost ? "selected" : ""}
              onClick={() => onSelectPost(post)}
            >
              <h3>{post.name}</h3>
              {selectedPost?.id === post.id && <p>Selected</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
