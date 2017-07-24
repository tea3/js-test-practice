exports.hello = (name) => "はろー！"+ name
exports.sum = (...arg) => {
  let result = 0
  for(let i of arg){
    result += i
  }
  return result
}