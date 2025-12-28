declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LOCAL_IP: string;
      API_URL: string;
      ENVIRONMENT: 'DEV' | 'PROD';
    }
  }
}

export {};
