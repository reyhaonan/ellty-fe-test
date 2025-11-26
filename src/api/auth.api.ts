import { apiFetch } from "./apiFetch";

export const login = async (data: { username: string; password: string }) => {
  const response = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Login failed");
  }
  return response.json();
};

export const register = async (data: {
  username: string;
  password: string;
}) => {
  const response = await apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Registration failed");
  }
  return response.json();
};

export const logout = async () => {
  const response = await apiFetch("/auth/logout", { method: "POST" });
  if (!response.ok) {
    throw new Error("Logout failed");
  }
  return response.json();
};

export const getCurrentUser = async () => {
  const response = await apiFetch("/auth/me");
  if (!response.ok) {
    return null;
  }
  return response.json();
};
