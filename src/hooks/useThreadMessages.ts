import { useQuery } from "@tanstack/react-query";
import { fetchThreadMessages } from "@/api/message.api";

export const useThreadMessages = (threadId: number) => {
  return useQuery({
    queryKey: ["messages", threadId],
    queryFn: () => fetchThreadMessages({ threadId }),
  });
};
