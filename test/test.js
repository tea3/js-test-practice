const assert = require('power-assert')
const myModule = require('../index')



// before( (done) => {
//     console.log('[describe]before test')
//     done()
// })

// beforeEach( (done) => {
//     console.log('[it]before every test')
//     done()
// })

// afterEach( (done) => {
//     console.log('[it]after every test')
//     done()
// })

// after( (done) => {
//     console.log('[describe]after test')
//     done()
// })

describe('作ったプログラムを次の項目ごとにテストします' , () => {

	describe('1. 挨拶のテスト その１', () => {
        it('「やあ！」と挨拶しないとだめ', () => {
            assert.equal(myModule.hi('太郎'), 'やあ！太郎')
        })
    })

    describe('2. 挨拶のテスト その2', () => {
        it('「はろー！」と挨拶しないとだめ', () => {
            assert.equal(myModule.hello('太郎'), 'はろー！太郎')
        })
    })

    describe('3. 挨拶と合計を計算するテスト', () => {
        it('挨拶と合計を計算しないとだめ', () => {
            assert.equal(myModule.helloSum('太郎',1,2,3), 'はろー！太郎。合計は6です。')
        })
    })

})