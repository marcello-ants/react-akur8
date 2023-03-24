import React, { useState } from "react";
import { Post } from "@/types";

type ValidationState = {
  name: {
    isValid: boolean;
    isTouched: boolean;
  };
  content: {
    isValid: boolean;
    isTouched: boolean;
  };
};

type Props = {
  onAddPost: (post: Post) => void;
};

const CreatePost = ({ onAddPost }: Props) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [validationState, setValidationState] = useState<ValidationState>({
    name: { isValid: false, isTouched: false },
    content: { isValid: false, isTouched: false },
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setName(inputValue);
    setValidationState({
      ...validationState,
      name: {
        isValid: inputValue.length >= 6 || inputValue.length === 0,
        isTouched: true,
      },
    });
  };

  const handleTitleBlur = () => {
    setValidationState({
      ...validationState,
      name: {
        isValid: name.length >= 6,
        isTouched: true,
      },
    });
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputValue = event.target.value;
    setContent(inputValue);
    setValidationState({
      ...validationState,
      content: {
        isValid: inputValue.trim().length !== 0,
        isTouched: true,
      },
    });
  };

  const handleContentBlur = () => {
    setValidationState({
      ...validationState,
      content: {
        isValid: content.trim().length !== 0,
        isTouched: true,
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = Date.now().toString();

    const newPost: Post = {
      id,
      name,
      content,
    };

    onAddPost(newPost);
    setName("");
    setContent("");
    setValidationState({
      name: { isValid: false, isTouched: false },
      content: { isValid: false, isTouched: false },
    });
  };

  const handleReset = () => {
    setName("");
    setContent("");
    setValidationState({
      name: { isValid: false, isTouched: false },
      content: { isValid: false, isTouched: false },
    });
  };

  return (
    <div className="create-new-post">
      <h2>Create new post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            required
          />
          {name &&
            !validationState.name.isValid &&
            validationState.name.isTouched && (
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
            onBlur={handleContentBlur}
            required
          />
        </div>
        <div className="form-actions">
          <button
            type="button"
            disabled={
              !validationState.name.isTouched &&
              !validationState.content.isTouched
            }
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={
              !validationState.name.isValid || !validationState.content.isValid
            }
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
