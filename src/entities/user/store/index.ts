import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async getUserProfile() {
      try {
        const response = await this.$api.getUserProfile();

        return response.data;
      } catch (error: unknown) {
        return Promise.reject((error as { res: { success: boolean } }).res.success);
      }
    },
  },
});
