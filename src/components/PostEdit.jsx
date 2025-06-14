import { useEffect, useState } from "react";
import { useUpdatePost } from "../hooks/useProduct";

const PostEdit = ({ post }) => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const mutation = useUpdatePost();
  useEffect(() => {
    if (post) {
      setFormData({ title: post.title, content: post.content });
    }
  }, [post]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ id: post.id, updatedPost: formData });
    console.log("Post updated:", formData);
    // Reset the form after submission
    setFormData({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="w-3/12 bg-gray-200 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Post Edit</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter post content"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default PostEdit;
