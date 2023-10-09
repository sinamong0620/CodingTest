function solution(array, n) {
  const a = array.sort((a, b) => a - b);
  let arr = [];
  for (let i of array) {
    if (n - i < 0) {
      arr.push(i - n);
    } else {
      arr.push(n - i);
    }
  }
  return a[arr.indexOf(Math.min(...arr))];
}
