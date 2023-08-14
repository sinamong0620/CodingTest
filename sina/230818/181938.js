function solution(a, b) {
  const result = Number(a.toString() + b.toString());
  const result2 = 2 * a * b;

  return result > result2 ? result : result2;
}
