import { AxiosInstance } from 'axios';

import { authApi } from '@/entities/auth';
import { productsApi } from '@/entities/products';

export default class Requests {
  constructor(
    public http: AxiosInstance,
    public baseUrl: string,
  ) {
    const requests = {
      ...productsApi(this.http),
      ...authApi(this.http),
      http: this.http,
      baseUrl: this.baseUrl,
    };

    Object.assign(this, requests);
  }
}
