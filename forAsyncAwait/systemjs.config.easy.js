System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  transpiler: 'plugin-babel', // ブラウザ上でbabelによるコンパイルを実行する。
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js', // plugin-babelに必要。
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js', // plugin-babelに必要。
    'app': '.dest',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    'rxjs/Rx': 'node_modules/rxjs/bundles/Rx.umd.js',
  },
  packages: {
    'app': { main: 'main', loader: 'plugin-babel' }, 
    '@angular/core': { main: '/bundles/core.umd' },
    '@angular/common': { main: '/bundles/common.umd' },
    '@angular/compiler': { main: '/bundles/compiler.umd' },
    '@angular/platform-browser': { main: '/bundles/platform-browser.umd' },
    '@angular/platform-browser-dynamic': { main: '/bundles/platform-browser-dynamic.umd' },
    'rxjs': {},
    'symbol-observable': { main: 'index' },
  }
});