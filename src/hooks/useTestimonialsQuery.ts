import { useQuery } from "@tanstack/react-query";
import { queryKey } from "src/constants/queryKey";
import { fetchTestimonials } from "src/libs/api";
import { TTestimonialsResponse } from "src/types";

const useTestimonialsQuery = () => {
  const { data, isLoading, error, refetch } = useQuery<TTestimonialsResponse>({
    queryKey: queryKey.testimonials(),
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    testimonials: data?.data || [],
    isLoading,
    error,
    refetch,
  };
};

export default useTestimonialsQuery;
