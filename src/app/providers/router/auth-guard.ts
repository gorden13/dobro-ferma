import { useUserStore } from '@/entities/user';

export const isAuthenticated = () => {
  const userStore = useUserStore();

  return userStore.user !== null;
};
