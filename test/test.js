var TypeWriter = require('../dist/cb-typewriter.min.js');
var assert = require('assert');

describe('TypeWriterオブジェクトの引数のテスト', function () {

　it('引数に何も設定しない場合', function () {
    var typewriter = new TypeWriter();

  });

  it('引数にarray以外を設定した場合', function () {
    var typewriter = new TypeWriter('string');

  });

  it('引数にarrayを設定した場合', function () {
    var typewriter = new TypeWriter(['Hello', 'World']);

  });

});
