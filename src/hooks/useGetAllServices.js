import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "../services/apiServices";

export const useGetAllServices = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getAllServices,
    queryKey: ["allServices"],
  });
  return { data, isLoading, isError, error };
};
