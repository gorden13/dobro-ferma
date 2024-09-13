import 'pinia';
import { TServiceApi } from '../app/api';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $api: TServiceApi;
  }
}
