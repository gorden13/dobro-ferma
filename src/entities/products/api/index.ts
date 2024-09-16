import { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { IProduct, IProductsRequest } from './dto';

export type TProductsApi = {
  getProducts: (
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IProduct[], AxiosRequestConfig<IProductsRequest>>>;
};

export const productsApi = (http: AxiosInstance): TProductsApi => ({
  async getProducts({ cancelToken } = {}) {
    const result = await http.get('products', { cancelToken });

    return result;
  },
});

export * from './dto';
