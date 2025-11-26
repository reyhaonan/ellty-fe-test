import { useQuery } from "@tanstack/react-query";
import { fetchThreads } from "@/api/thread.api";

export const useThreads = () => {
  return useQuery({
    queryKey: ["threads"],
    queryFn: fetchThreads,
  });
};
