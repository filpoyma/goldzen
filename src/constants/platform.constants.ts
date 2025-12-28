import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const isLocalDev = __DEV__;
export const isProd = process.env.ENVIRONMENT === 'PROD';
export const isDev = process.env.ENVIRONMENT === 'DEV';
