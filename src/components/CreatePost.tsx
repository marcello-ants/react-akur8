import React, { useState } from "react";
import { Post } from "@/types";

type Props = {
  onAddPost: (post: Post) => void;
};

function CreatePost({ onAddPost }: Props) {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsValid(event.target.value.length >= 6);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let id = Date.now().toString();
    setName("");
    setContent("");

    const newPost: Post = {
      id,
      name,
      content,
    };

    onAddPost(newPost);
    setName("");
    setContent("");
  };

  const handleReset = () => {
    setName("");
    setContent("");
    setIsValid(false);
  };

  return (
    <div className="create-new-post">
      <h3>Create new post</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleTitleChange}
            required
          />
          {!isValid && (
            <span className="error-message">
              Title must be at least 6 characters.
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={!isValid}>
            Create
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
