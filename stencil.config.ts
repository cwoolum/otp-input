import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, angularValueAccessorBindings } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'otp-input',
  taskQueue: 'async',
  globalStyle: 'src/global/variables.css',
  plugins: [
    sass()
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'component-library',
      directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
