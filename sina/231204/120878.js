function solution(a, b) {
  var answer = [];
  var bigger = a > b ? a : b;

  //기약분수 만들어주기
  for (let i = 2; i <= bigger; i++) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
    }
  }
  //소인수분해 해주기
  for (let i = 2; i <= b; i++) {
    while (b % i === 0) {
      b = b / i;
      answer.push(i);
    }
  }
  return [...new Set(answer)]
    .filter((x) => x % 2 !== 0)
    .filter((x) => x % 5 !== 0).length
    ? 2
    : 1;
}
