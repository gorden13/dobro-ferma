import { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { IProduct, IProductsRequest } from './dto';

import { IPaging } from '@/shared/types';

export type TProductsApi = {
  getProducts: (
    data: IProductsRequest,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IPaging<IProduct[]>, AxiosRequestConfig<IProductsRequest>>>;
};

export const productsApi = (http: AxiosInstance): TProductsApi => ({
  async getProducts(data: IProductsRequest, { cancelToken } = {}) {
    const result = await http.post('products/list', data, { cancelToken });

    return result;
  },
});

export * from './dto';
