// import { useUserStore } from '@/entities/user';

export const authGuard = () => {
  const user = { fullName: '' };
  return !user || user.fullName === '';
};
