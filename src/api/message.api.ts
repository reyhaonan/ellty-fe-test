import type { BaseResponse } from "@/types/BaseResponse";
import { apiFetch } from "./apiFetch";

type Message = {
  id: number;
  parentMessageId: number | null;
  threadId: number;
  authorId: number;
  authorUsername: string;
  operation: "add" | "sub" | "mul" | "div";
  operand: string;
  resultNumber: string;
  depth: number;
  createdAt: string;

  replies: Message[];
};

type MessagesData = {
  messages: Message[];
};

export const fetchThreadMessages = async ({
  threadId,
}: {
  threadId: number;
}) => {
  const response = await apiFetch(`/messages?threadId=${threadId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as Promise<BaseResponse<MessagesData>>;
};

export const createMessage = async (newMessage: {
  threadId: number;
  parentMessageId?: number;
  operation: string;
  operand: number;
}) => {
  const response = await apiFetch(`/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessage),
  });
  if (!response.ok) {
    throw new Error("Failed to create message");
  }
  return response.json();
};
