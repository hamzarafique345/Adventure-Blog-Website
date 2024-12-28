"use client";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

// Interface for comments
interface Comment {
  name: string;
  comment: string;
  createdAt: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    const parsedComments: Comment[] = savedComments ? JSON.parse(savedComments) : [];
    setComments(parsedComments);
  }, []);

  // Save comments to localStorage whenever they change
  const saveComments = (newComments: Comment[]) => {
    localStorage.setItem("comments", JSON.stringify(newComments));
    setComments(newComments);
  };

  // Add a new comment
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      alert("Please enter both your name and comment.");
      return;
    }

    const newComment: Comment = {
      name,
      comment,
      createdAt: new Date().toLocaleString(),
    };

    saveComments([newComment, ...comments]);
    setName("");
    setComment("");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      <h1 className="text-3xl font-semibold text-gray-700 text-center mb-6">
        Share Your Thoughts!
      </h1>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Leave a Comment</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 w-full"
        >
          Submit
        </button>
      </form>

      {/* Top Comments Section */}
      <div className="mt-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Top Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 3).map((c, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-blue-600">{c.name}:</span> {c.comment}
              </p>
              <p className="text-sm text-gray-500">{c.createdAt}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>

      {/* All Comments Section */}
      <div className="mt-8 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">All Comments</h2>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="mb-4 border-b pb-4 last:border-none">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-blue-600">{c.name}:</span> {c.comment}
              </p>
              <p className="text-sm text-gray-500">{c.createdAt}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;

