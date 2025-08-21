import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Always consider data stale to force refetch
      staleTime: 0,
      // Keep data in cache for 5 minutes
      gcTime: 5 * 60 * 1000,
      // Retry failed requests 3 times
      retry: 3,
      // Refetch on window focus for fresh data
      refetchOnWindowFocus: true,
      // Refetch on mount
      refetchOnMount: true,
      // Refetch on reconnect
      refetchOnReconnect: true,
    },
  },
});
