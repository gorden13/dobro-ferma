import { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { IProduct, IProductCreateRequest, IProductsRequest } from './dto';

export type TProductsApi = {
  getProducts: (
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IProduct[], AxiosRequestConfig<IProductsRequest>>>;
  createProduct: (
    data: FormData,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IProduct, AxiosRequestConfig<IProductCreateRequest>>>;
  getProduct: (
    id: string,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IProduct, AxiosRequestConfig<{ id: string }>>>;
  updateProduct: (
    id: string,
    data: FormData,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IProduct, AxiosRequestConfig<{ id: string }>>>;
  removeProduct: (
    id: string,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<unknown, AxiosRequestConfig<{ id: string }>>>;
};

export const productsApi = (http: AxiosInstance): TProductsApi => ({
  async getProducts({ cancelToken } = {}) {
    const result = await http.get('products/me', { cancelToken });

    return result;
  },
  async createProduct(data, { cancelToken } = {}) {
    const result = await http.post('products', data, {
      cancelToken,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return result.data as AxiosResponse<IProduct>;
  },
  async getProduct(id, { cancelToken } = {}) {
    const result = await http.get(`products/${id}`, { cancelToken });

    return result as AxiosResponse<IProduct>;
  },
  async updateProduct(id, data, { cancelToken } = {}) {
    const result = await http.put(`products/${id}`, data, { cancelToken });

    return result.data;
  },
  async removeProduct(id, { cancelToken } = {}) {
    const result = await http.delete(`products/${id}`, { cancelToken });

    return result;
  },
});

export * from './dto';
