import { defineStore } from 'pinia';

import { IVerificationForm } from '../api/dto';

export const useAuthStore = defineStore('auth', {
  state: () => ({}),
  actions: {
    async logIn(data: IVerificationForm) {
      try {
        const response = await this.$api.logIn(data);

        localStorage.setItem('ticket', response.data.token);

        return response.data.token;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
