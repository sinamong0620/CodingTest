function solution(a, b, n) {
  let current_cola = b * Math.floor(n / a);
  let remain_cola = n % a;
  let sum = current_cola;
  if (remain_cola > 0) {
    current_cola += remain_cola;
  }
  while (a <= current_cola) {
    remain_cola = current_cola % a;
    current_cola = b * Math.floor(current_cola / a);
    sum += current_cola;
    //나머지 발생하면 그 수를 바로 current_cola에 넣어버리기.
    if (remain_cola > 0) {
      current_cola += remain_cola;
    }
  }
  return sum;
}
