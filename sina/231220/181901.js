function solution(n, k) {
  return Array(n)
    .fill()
    .map((x, i) => i + 1)
    .filter((x) => !(x % k));
}
