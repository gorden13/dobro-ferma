import axios from 'axios';
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry';
import qs from 'qs';
import Vue, { PluginObject } from 'vue';

import { DEFAULT_HTTP_TIMEOUT } from './constants';
import CreateRequests from './requests';

export * from './types';

interface InterceptorEntity {
  isActive?: boolean;
}

export interface HttpOptions {
  retry?: IAxiosRetryConfig;
  baseURL: string;
  authBlackListUrls?: (string | RegExp | unknown)[];
  auth?: InterceptorEntity;
  timeout?: number;
  requestSuccessInterceptor?: <T>(value: T) => T | Promise<T>;
  requestErrorInterceptor?: <T>(error: T) => Promise<T>;
  responseErrorInterceptor?: <T>(error: T) => Promise<T>;
  responsePrintDebugInfoInterceptor?: <T>(value: T) => Promise<T>;
  requestSetStartTimeInterceptor?: <T>(value: T) => Promise<T>;
  responseSuccessInterceptor?: <T>(value: T) => Promise<T>;
  requestKeycloakInterceptor?: <T>(value: T) => Promise<T>;
}

export const useHttpPlugin: PluginObject<HttpOptions> = {
  install(vm: typeof Vue, options = {} as HttpOptions) {
    const { baseURL } = options;

    const http = axios.create({
      baseURL,
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

    if (!vm.prototype.$http) {
      Object.defineProperty(vm.prototype, `$http`, {
        value: http,
        writable: false,
      });
    }
  },
};

export default {
  install(vue: typeof Vue, options: { baseUrl: string }) {
    Object.defineProperty(vue.prototype, '$api', {
      value: {
        ...new CreateRequests(vue.prototype.$http, options.baseUrl),
      },
    });
  },
};
