function solution(n) {
  let answer = [];
  let num = 2;

  while (n !== 1) {
    if (n % num === 0) {
      answer.push(num);
      n = n / num;
    } else {
      num++;
    }
  }

  let set = new Set(answer);
  return [...set];
}
