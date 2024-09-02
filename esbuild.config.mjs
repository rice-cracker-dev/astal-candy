import { sassPlugin } from 'esbuild-sass-plugin';
import { copy } from 'esbuild-plugin-copy';
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  target: 'chrome98',
  external: [
    'console',
    'system',
    'file://*',
    'gi://*',
    'resource://*',
  ],
  plugins: [
    sassPlugin(),
    copy({
      assets: [{
        from: ['./assets/**/*'],
        to: ['./assets'],
      }]
    })
  ],
})
