function solution(n) {
  let array = Array.from({ length: n }, (_, i) => i + 1);
  const result = array.filter((num) => {
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
      return true;
    }
  });
  return result.filter(
    (num) => !(num === 2 || num === 3 || num === 5 || num === 7)
  ).length;
}
