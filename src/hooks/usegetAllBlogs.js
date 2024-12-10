import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../services/apiServices";

export const usegetAllBlogs = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getAllBlogs,
    queryKey: ["blogs"],
  });
  return { data, isLoading, isError, error };
};
