import { Pinia } from 'pinia';

export const checkAccess = async (piniaInstance: Pinia) => {
  try {
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    };

    const result = await (
      await fetch(`${import.meta.env.VITE_BASE_URL}users/me`, {
        headers: !import.meta.env.PROD ? headers : {},
        credentials: import.meta.env.PROD ? 'include' : undefined,
      })
    ).json();

    if (result?.data) {
      piniaInstance.use(({ store }) => {
        store.user = {
          ...result,
        };
      });
    }
  } catch (error: unknown) {
    //
  }
};
