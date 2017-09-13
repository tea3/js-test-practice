

[![Build Status](https://travis-ci.org/tea3/js-test-practice.svg?branch=master)](https://travis-ci.org/tea3/js-test-practice) [![Coverage Status](https://img.shields.io/coveralls/tea3/js-test-practice.svg)](https://coveralls.io/r/tea3/js-test-practice?branch=master) <!--[![NPM version](https://badge.fury.io/js/mocha-test.svg)](http://badge.fury.io/js/mocha-test)-->

# js-test-practice

javascript(ES6)のテスト環境とTravis CIの練習です。

記事： [javascriptのテストとコード構文チェックに必要なもの。mocha・eslint・istanbul・power-assertの概要](https://photo-tea.com/p/17/javascript-test-how-to-1/)

## 使い方

Node.js v8 以上で動作します。

```
$ git clone
$ nvm install 8.2.1
$ nvm use 8.2.1
$ npm install
```

各テストは以下のコマンドで実行できます。

```
$ npm run test
$ npm run test-cov
$ npm run eslint
```

- `test`: mochaによるテストです。
- `test-cov`: istanbulによるmochaテストと、カバレッジ取得をします。
- `eslint`: eslintで文法チェックを行います。

Travis CIにより、リポジトリpushのタイミングで`eslint`と`test-cov`が実行されます。

---

## 参考記事

### テストの書き方、使い方

- [mochaとchaiの最も基本的な使い方 | 30歳からのプログラミング](http://numb86-tech.hatenablog.com/entry/2016/06/08/155834)
- [node.jsのいろいろなモジュール22 – mochaでテストを書こう | Developers.IO](http://dev.classmethod.jp/server-side/node-mocha/)
- [power-assertの使い方 Node.js編 | Web Scratch](http://efcl.info/2014/0406/res3809/)
- [ユニットテストにpower-assertを使う | 四角革命前夜](https://blog.sasaplus1.com/2015/01/11/02/)


### githubの自動テスト

- [Travis CIで自動テスト | Qiita](http://qiita.com/sugarshin/items/0b09dfb7c4a4a68e5da0)
- [Travis CIを使ってnpmを継続的に公開・メンテナンスするよ | Qiita](http://qiita.com/KamataRyo/items/6e795c6734f9a775f5a6)


### カバレッジ(テスト網羅率)について

- [(ruby)Travis CIとCoverallsとCode Climateを使ってGitHubリポジトリにバッジを付ける | アインシュタインの電話番号](http://blog.ruedap.com/2013/09/02/travis-ci-coveralls-code-climate-github-badge)
- [Node.jsの開発を超速化するGitHub連携 三種の神器 (Travis CI・Coveralls・David) | teppeis blog](http://teppeis.hatenablog.com/entry/2013/12/node-github)

#### カバレッジを取得するistanbulについて

- [istanbul + mocha設定メモ | なっく日報](http://yukidarake.hateblo.jp/entry/2015/06/29/202652)
- [Mocha + Istanbulでテストしてコードカバレッジを取得する | Safx](http://safx-dev.blogspot.jp/2013/09/mocha-istanbul.html)

#### Javascriptの構文チェック

ESLint <[デモ](http://eslint.org/demo/)・[ルール一覧](http://eslint.org/docs/rules/)>

- [ESLintでJavaScriptの構文チェックを始める | Tips Note by TAM](https://www.tam-tam.co.jp/tipsnote/javascript/post9944.html)
- [ESLint 最初の一歩 | Qiita](http://qiita.com/mysticatea/items/f523dab04a25f617c87d)
- [ESLintについてのメモ | Qiita](http://qiita.com/makotot/items/822f592ff8470408be18)
- [ESLint のカスタムルールを作ろう! (その1) | Qiita](http://qiita.com/mysticatea/items/cc3f648e11368799e66c)
- [ESLint v3.5.0 リリース、JSCS との関係 | ミツエーリンクス フロントエンドBlog](https://www.mitsue.co.jp/knowledge/blog/frontend/201609/12_1213.html)

#### Sublime textでESlintを使う

- [roadhump/SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)をインストールして使う
- [Sublime Text3 lintエラーをリアルタイム表示してjavascriptの実装を少しだけ効率化 | Qiita](http://qiita.com/etet-etet/items/3c939ed07d22474e4f28)

※eslintの設定を共用するには記事「[ESLint 最初の一歩 | Qiita](http://qiita.com/mysticatea/items/f523dab04a25f617c87d)」の「Shareable Config (共有設定) を使う」や[共有設定でらくらく ESLint | Qiita](http://qiita.com/mysticatea/items/dc35ced6bd5e782f50cd)が参考になる？

### その他

- [jscs – 奇麗なコードを書こう。JavaScriptコーディングスタイルチェッカー | moongift](http://www.moongift.jp/2013/11/jscs-%E5%A5%87%E9%BA%97%E3%81%AA%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%93%E3%81%86%E3%80%82javascript%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%BF%E3%82%A4/)
- [npmにライブラリをアップロードするときに.npmignoreで生成物を公開/制限するパターン | Qiita](http://qiita.com/mizchi/items/bf2da480b0a7f216ba78)
