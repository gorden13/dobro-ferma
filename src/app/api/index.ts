import axios from 'axios';
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry';
import qs from 'qs';
import { App } from 'vue';

import { DEFAULT_HTTP_TIMEOUT } from './constants';
import CreateRequests from './requests';

interface InterceptorEntity {
  isActive?: boolean;
}

interface HttpOptions {
  retry?: IAxiosRetryConfig;
  baseURL: string;
  authBlackListUrls?: (string | RegExp | unknown)[];
  auth?: InterceptorEntity;
  timeout?: number;
}

export const apiPlugin = {
  install: (app: App, options: HttpOptions = {} as HttpOptions) => {
    const http = axios.create({
      baseURL: options.baseURL,
      withCredentials: false,
      paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
      timeout: options.timeout ?? DEFAULT_HTTP_TIMEOUT,
    });

    axiosRetry(http, {
      retries: 0,
      retryCondition: () => false,
      ...options.retry,
    });

    const requestsModule = {
      value: {
        ...new CreateRequests(http, options.baseURL),
      },
    };

    app.config.globalProperties.$http = http;
    app.config.globalProperties.$api = requestsModule;
  },
};
