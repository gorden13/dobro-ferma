import { defineStore } from 'pinia';

import { IProduct } from '../api/dto';

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
    async createProduct(data: FormData) {
      try {
        const response = await this.$api.createProduct(data);

        this.currentProduct = response.data;

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async getProductById(id: string) {
      try {
        const response = await this.$api.getProduct(id);

        this.currentProduct = response.data;

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async updateProduct(id: string, data: FormData) {
      try {
        const response = await this.$api.updateProduct(id, data);

        this.currentProduct = response.data;

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async removeProduct(id: string) {
      try {
        const response = await this.$api.removeProduct(id);

        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
