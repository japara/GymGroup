import { useQuery } from "@tanstack/react-query";
import { getAllPrices } from "../services/apiServices";

export const useGetAllPrices = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getAllPrices,
    queryKey: ["getAllPrices"],
  });
  return { data, isLoading, isError, error };
};
