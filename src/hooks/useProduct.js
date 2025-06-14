import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const usePost = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => axios.get("http://localhost:3000/posts"),
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPost) => {
      return axios.post("http://localhost:3000/posts", newPost);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => axios.delete(`http://localhost:3000/posts/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
