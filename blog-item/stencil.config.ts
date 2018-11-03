import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'blogitemcomponent',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  devServer: {
    port: 4000
  }
};
