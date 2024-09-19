import { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { IVerificationForm } from './dto';

export type TAuthApi = {
  logIn: (
    data: IVerificationForm,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<
    AxiosResponse<
      {
        success: any;
        token: string;
      },
      AxiosRequestConfig<IVerificationForm>
    >
  >;
  register: (
    data: IVerificationForm,
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<{ token: string }, AxiosRequestConfig<IVerificationForm>>>;
};

export const authApi = (http: AxiosInstance): TAuthApi => ({
  async logIn(data, { cancelToken } = {}) {
    const result = await http.post('auth/authorization', data, { cancelToken });

    return result;
  },
  async register(data, { cancelToken } = {}) {
    const result = await http.post('auth/registration', data, { cancelToken });

    return result;
  },
});
