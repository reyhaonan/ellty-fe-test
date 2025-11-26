import { createThread } from "@/api/thread.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateThread = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createThread,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["threads"],
      });
    },
  });
};
