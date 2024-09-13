import { defineStore } from 'pinia';

import { IProduct, IProductsRequest } from '../api/dto';

export const useProductsStore = defineStore('products', {
  state: () => ({
    productsList: [] as IProduct[],
  }),
  actions: {
    async getProductsList(data: IProductsRequest) {
      try {
        const response = await this.$api.getProducts(data);
        this.productsList = response.data.items;

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
