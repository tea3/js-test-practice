var global = (function(){return this})();
if(!('chai' in global)){
    var chai = require('chai');
    var assert = chai.assert;
}

var myFunc = function(a, b){
    return a + b;
};

describe('テストのタイトル', function () {
  it('等価比較', function () {
    assert.equal(3, '3');
  });
  it('同値比較', function(){
    assert.strictEqual(3, '3');
  });
  it('自作の関数をテスト', function () {
    assert.strictEqual(myFunc(1, 2), 3);
  });
});