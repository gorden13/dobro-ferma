import { defineStore } from 'pinia';

import { IProduct } from '../api/dto';

export const useProductsStore = defineStore('products', {
  state: () => ({
    productsList: [] as IProduct[],
  }),
  actions: {
    async getProductsList() {
      try {
        const response = await this.$api.getProducts();
        this.productsList = response.data;

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
