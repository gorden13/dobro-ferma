import { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { IUser } from './dto';

export type TUserApi = {
  getUserProfile: (
    cancelToken?: Record<string, CancelToken | undefined>,
  ) => Promise<AxiosResponse<IUser, AxiosRequestConfig<undefined>>>;
};

export const userApi = (http: AxiosInstance): TUserApi => ({
  async getUserProfile({ cancelToken } = {}) {
    const result = await http.post('users/me', { cancelToken });

    return result;
  },
});

export * from './dto';
