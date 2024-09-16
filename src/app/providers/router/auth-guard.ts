export const authGuard = () => {
  const token = localStorage.getItem('ticket');
  return Boolean(token);
};
