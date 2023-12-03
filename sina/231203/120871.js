function solution(n) {
  let array = [1];
  //횟수
  let num = 1;
  let i = 1;

  while (num <= n) {
    i++;
    if (i % 3 === 0 || i.toString().includes("3")) {
      continue;
    }
    array.push(i);
    num++;
  }

  return array[n - 1];
}
