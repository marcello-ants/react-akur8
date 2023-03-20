import { useState } from "react";

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
            <li key={post.id}>
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
