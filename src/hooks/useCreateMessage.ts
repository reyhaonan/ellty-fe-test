import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessage } from "@/api/message.api";

export const useCreateMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMessage,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["messages", variables.threadId],
      });
    },
  });
};
