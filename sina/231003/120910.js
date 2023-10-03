function solution(n, t) {
  for (let i = 0; i < t; i++) {
    n *= 2;
  }
  return n;
}
//이거 말고 Math.pow 방법이 낫지 않을까나
