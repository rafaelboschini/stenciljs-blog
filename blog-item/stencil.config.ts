import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

/*
  generateDistribution: true,
  generateWWW: false,
*/

exports.config = {
  namespace: 'rboschini-components',
  outputTargets: [
    { type: 'dist' }
  ],
  bundles: [{ components: ['blog-item'] }],
  plugins: [
    sass()
  ]
};