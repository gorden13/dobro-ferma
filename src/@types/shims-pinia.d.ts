import 'pinia';
import { TServiceApi } from '../app/api/types';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $api: TServiceApi;
  }
}
