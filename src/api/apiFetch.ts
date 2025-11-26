const API_BASE = import.meta.env.VITE_API_URL;

export const apiFetch = async (url: string, options?: RequestInit) => {
  return fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include",
  });
};
