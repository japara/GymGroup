import { useQuery } from "@tanstack/react-query";
import { apiGetServiceById } from "../services/apiGetServiceById";

export const useGetPrice = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: apiGetServiceById,
    queryKey: ["price"],
  });

  return { data, isLoading, isError, error };
};

