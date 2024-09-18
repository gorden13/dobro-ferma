import { useAuthStore } from '@/entities/auth';

export const isAuthenticated = () => {
  const authStore = useAuthStore();

  // return authStore.isAuthenticated;

  return true;
};
