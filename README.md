# ng2handson20160724-ng2-5minquickstart
Angular2ハンズオン(2016年7月24日)向けの公式"5 min quickstart"ちょいアレンジ版

---

### Editor
Visual Studio Code ver.1.3.1

### Setup
```
$ npm install
```

### Run
```
$ npm start
```

---

公式チュートリアルからの変更点

- `systemjs.config.js`は初めて見る人は面食らうと思うので`systemjs.config.easy.js`を別に書いた。
- typescriptのバージョンを2.0にした。(せっかくなので)
- `tsc`の出力結果を`.dest`フォルダに分離して尚且つ`.dest`は`.gitignore`に追加した。
- lite-serverの起動時に`config/browsersync.json`を読み込むようにした。
- minifyされたumdファイルを読み込むための`systemjs.config.easy.min.js`を書いた。(`index.html`の`<script src="systemjs.config.easy.js"></script>`を変更する)
- async/awaitを有効にするための`tsconfig.json`を`forAsyncAwait`フォルダに作成した。

---

### Run with async/await
まず`forAsyncAwait/tsconfig.json`をルートにコピーしてそれから
```
$ npm run asyncawait
```

---

補足

- babel-cliの`babel`コマンドは`--minified`をオプションとして与えると変換後のファイルはminifyされる。
