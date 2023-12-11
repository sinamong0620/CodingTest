function solution(num, total) {
  //첫번째항
  var a = (2 * total - num ** 2 + num) / (2 * num);
  var result = [];

  for (let i = 0; i < num; i++) {
    result.push(a + i);
  }
  return result;
}
