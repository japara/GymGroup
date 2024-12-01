import { useQuery } from "@tanstack/react-query";
import { getAllSuccessStories } from "../services/apiServices";

export const useGetAllSuccessStories = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getAllSuccessStories,
    queryKey: ["allSuccessStories"],
  });
  return { data, isLoading, isError, error };
};
