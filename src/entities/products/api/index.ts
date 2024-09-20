import { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { IProduct, IProductCreateRequest, IProductsRequest } from './dto';

export type TProductsApi = {
  getProducts: (
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IProduct[], AxiosRequestConfig<IProductsRequest>>>;
  createProduct: (
    data: IProductCreateRequest,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IProduct, AxiosRequestConfig<IProductCreateRequest>>>;
};

export const productsApi = (http: AxiosInstance): TProductsApi => ({
  async getProducts({ cancelToken } = {}) {
    const result = await http.get('products/me', { cancelToken });

    return result;
  },
  async createProduct(data, { cancelToken } = {}) {
    const result = await http.post('products', data, { cancelToken });

    return result.data as AxiosResponse<IProduct>;
  },
});

export * from './dto';
