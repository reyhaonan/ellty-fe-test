import type { BaseResponse } from "@/types/BaseResponse";
import { apiFetch } from "./apiFetch";

type Thread = {
  id: number;
  creatorId: number;
  creatorUsername: string;
  startingNumber: string;
  createdAt: string;
};

type ThreadsData = {
  threads: Thread[];
};

export const fetchThreads = async () => {
  const response = await apiFetch(`/threads`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as Promise<BaseResponse<ThreadsData>>;
};

export const createThread = async (startingNumber: number) => {
  const response = await apiFetch(`/threads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ startingNumber }),
  });
  if (!response.ok) {
    throw new Error("Failed to create thread");
  }
  return response.json();
};
