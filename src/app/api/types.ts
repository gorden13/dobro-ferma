import { AxiosInstance } from 'axios';

import { TAuthApi } from '@/entities/auth';
import { TProductsApi } from '@/entities/products';
import { TUserApi } from '@/entities/user/api';

export interface IBaseApi {
  http: AxiosInstance;
  baseUrl: string;
}

export type HttpError = {
  status?: number;
  message?: string;
};

export type TServiceApi = IBaseApi & TProductsApi & TAuthApi & TUserApi;
