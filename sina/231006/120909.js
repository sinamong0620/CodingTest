function solution(n) {
  let num = 1;
  let answer = 2;

  while (Math.pow(num, 2) <= n) {
    console.log(num, Math.pow(num, 2) === n);
    if (Math.pow(num, 2) === n) {
      answer = 1;
      break;
    }
    num++;
  }
  return answer;
}
