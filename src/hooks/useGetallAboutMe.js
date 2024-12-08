import { useQuery } from "@tanstack/react-query";
import { getHomeAboutMe } from "../services/apiServices";

export const useGetallAboutMe = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getHomeAboutMe,
    queryKey: ["homeAboutMe"],
  });
  return { data, isLoading, isError, error };
};
