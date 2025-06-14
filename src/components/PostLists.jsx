import { useDeletePost, usePost } from "../hooks/useProduct";

const PostLists = () => {
  const { data: posts, error, isLoading } = usePost();
  const mutation = useDeletePost();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="w-3/12 bg-gray-200 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Post List</h1>
      <ul className="mt-4">
        {posts?.data.map((post) => (
          <li
            key={post.id}
            className="mb-2 bg-gray-50 p-2 rounded-lg shadow-sm flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <button className="bg-green-500 cursor-pointer px-4 py-1  rounded-2xl text-white">
              Edit
            </button>
            <button
              onClick={() => mutation.mutate(post.id)}
              className="bg-red-500 cursor-pointer px-4 py-1  rounded-2xl text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostLists;
