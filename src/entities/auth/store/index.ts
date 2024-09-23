import { defineStore } from 'pinia';

import { IVerificationForm } from '../api/dto';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    async logIn(data: IVerificationForm) {
      try {
        const response = await this.$api.logIn(data);

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
