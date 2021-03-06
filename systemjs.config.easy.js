System.config({
  transpiler: false,
  map: {
    'app': '.dest', // System.import('app') と書いたら.destフォルダを参照する。
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    'rxjs/Rx': 'node_modules/rxjs/bundles/Rx.umd.js', // (このチュートリアルでは使われないが定義しておくと便利)
  },
  packages: {
    'app': { main: 'main' }, 
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
  import {...} from 'rxjs/Rx' は node_modules/rxjs/bundles/Rx.umd.js を参照することになる。
*/
