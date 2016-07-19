System.config({
  baseURL: '/',
  defaultJSExtensions: true, // 拡張子.jsをdefaultとする。
  transpiler: false,
  map: {
    'app': '.dest', // System.import('app') と書いたら.destフォルダを参照する。
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
  },
  packages: {
    'app': { main: 'main' }, // defaultJSExtensionsをtrueにしていない場合は、{ main: 'main.js' }と書く必要がある。 
    '@angular/core': { main: '/bundles/core.umd' },
    '@angular/common': { main: '/bundles/common.umd' },
    '@angular/compiler': { main: '/bundles/compiler.umd' },
    '@angular/platform-browser': { main: '/bundles/platform-browser.umd' },
    '@angular/platform-browser-dynamic': { main: '/bundles/platform-browser-dynamic.umd' },
    'rxjs': {},
    'symbol-observable': { main: 'index' },
  }
});

/*
  上記の設定により、
  System.import('app') は .dest/main.js を参照することになる。
  import {...} from '@angular/core' は node_modules/@angular/core/bundles/core.umd.js を参照することになる。 
*/
