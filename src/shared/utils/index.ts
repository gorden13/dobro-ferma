import { ElNotification, NotificationParams } from 'element-plus';

export const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const notify = (message = '', type = 'success'): void => {
  ElNotification({
    title: 'Заголовок',
    message,
    type,
  });
};
