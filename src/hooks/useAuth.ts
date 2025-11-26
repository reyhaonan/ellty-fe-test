import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login, register, logout, getCurrentUser } from "@/api/auth.api";
import type { LoginInput, RegisterInput } from "@/schemas/authSchema";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
    retry: false,
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginInput) => login(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
  const registerMutation = useMutation({
    mutationFn: (data: RegisterInput) => register(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["currentUser"], null);
    },
  });

  return {
    user: user?.data?.user || null,
    isLoading,
    error,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
  };
};
