function solution(arr) {
  const a = arr.map((num) => {
    if (num >= 50 && !(num % 2)) num /= 2;
    else if (num < 50 && num % 2) num *= 2;
    return num;
  });
  return a;
}
