import { AxiosInstance } from 'axios';

import { TProductsApi } from '@/entities/products';
import { TAuthApi } from '@/entities/auth';

export interface IBaseApi {
  http: AxiosInstance;
  baseUrl: string;
}

export type HttpError = {
  status?: number;
  message?: string;
};

export type TServiceApi = IBaseApi & TProductsApi & TAuthApi;
