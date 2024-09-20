import { defineStore } from 'pinia';

import { IProduct, IProductCreateRequest } from '../api/dto';

export const useProductsStore = defineStore('products', {
  state: () => ({
    productsList: [] as IProduct[],
    currentProduct: {} as IProduct,
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
    async createProduct(data: IProductCreateRequest) {
      try {
        const response = await this.$api.createProduct(data);

        this.currentProduct = response.data;

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
