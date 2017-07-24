const lib = require('./lib/sample-lib.js')

exports.hi 			= (name) => "やあ！"+ name
exports.hello 		= (name) => lib.hello(name)
exports.helloSum 	= (name , ...arg) => `${lib.hello(name)}。合計は${lib.sum(...arg)}です。`
