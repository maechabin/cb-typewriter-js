# cb-typewriter-js

## About
「cb-typewriter.js」は、任意のテキストをタイプライターで打っているかのように、１文字ずつ画面上に表示させるためのJSライブラリです。


## DEMO

[http://jsrun.it/maechabin/UrTN](http://jsrun.it/maechabin/UrTN)


## Download

こちらのページから[]ダウンロード](https://github.com/maechabin/cb-typewriter-js/archive/master.zip)するか、`[git clone]`コマンドでローカルにコピーします。

```
$ git clone git@git@github.com:maechabin/cb-typewriter-js.git 任意のディレクトリ名
```

npm経由でも入手可能です。
```
$ npm install --save cbtypewriter
```

機能の実装に使用するファイルは以下のjsファイルとなります。
- ./dist/cb-typewriter.min.js


## Usage

### 1. ライブラリの読み込み

distディレクトリ内の「cb-typewriter.min.js」をページに読み込みます。

```html
<script src="./dist/cb-typewriter.min.js"></script>
```

### 2. テキストを表示させる要素を準備

class属性の値を`cb-typewriter`として、テキストを表示させる要素を作成します。（class属性の値はオプションで任意の値に変更することも可能です。）

```html
<div class="cb-typewriter"></div>
```

### 3. 表示させるテキストを設定

<body>の閉じタグの直前に以下を挿入。`TypeWriter`オブジェクトの引数に表示させたいテキストを配列としてセットして、インスタンスを作成します。

```javascript
var typewriter = new TypeWriter(['Hello', 'World']);
```

`TypeWriter`オブジェクトの引数には表示させたいテキストを配列に格納してセットします。配列の要素ごとに改行が入るようになっています。

```javascript
TypeWriter(Array)
```


### 4. ライブラリを実行

作成したインスタンスに対して、`init()`メソッドを実行。initメソッドの引数に、オプションを指定します。

```javascript
typewriter.init();
```



## Option


### ヘッダーバーの表示/非表示に関するオプション


<dl>
<dt>selector {String}</dt>
<dd>表示させるテキストの要素のセレクタ名を指定します。任意のセレクタ名を持った要素に対して、ライブラリを実行したい時に使うオプションです。`.selector`、`#selector`などcssで使用するセレクタ名で指定します。デフォルト値は`.cb-typewriter`。</dd>

<dt>interval {Number (Integer)}</dt>
<dd>テキストの表示速度を指定します。数字で指定。単位はms（ミリ秒: 1/1000秒）となります。デフォルト値は`500`。</dd>

<dt>callback {Function}</dt>
<dd>テキストが完全に表示された後に実行させるコールバック関数を指定します。デフォルト値は`null`。</dd>
</dl>


## Example

### HelloとWorldを1行で表示させる場合

```javascript
var typewriter = new TypeWriter(['Hello World']);
typewrite.init();
```

### HelloとWorldを改行して表示させる場合

```javascript
var typewriter = new TypeWriter(['Hello', 'World']);
typewrite.init();
```
### セレクター名を.sampleに、テキストを表示させる間隔を100msにして、Hello Worldを表示させる場合

```javascript
var typewriter = new TypeWriter(['Hello', 'World']);
typewrite.init({
  selector: '.sample',
  interval: 100
});
```
### Hello Worldのテキストの表示が終わった後に、コールバック関数を実行させる場合

```javascript
var typewriter = new TypeWriter(['Hello', 'World']);
typewrite.init({
  callback: function () {
    alert('Hello World');
  }
});
```

## Note

`TypeWriter(['Hello', 'World'])`で吐き出されるDOMは以下の通りです。1文字ずつ`cb-tw`とclass名のついたspan要素でマークアップされています。

```html
<div class="cb-typewriter">
  <div>
    <span class="cb-tw">H</span>
    <span class="cb-tw">e</span>
    <span class="cb-tw">l</span>
    <span class="cb-tw">l</span>
    <span class="cb-tw">o</span>
  </div>
  <div>
    <span class="cb-tw">W</span>
    <span class="cb-tw">o</span>
    <span class="cb-tw">r</span>
    <span class="cb-tw">l</span>
    <span class="cb-tw">d</span>
  </div>
</div>
```

## License

MIT license