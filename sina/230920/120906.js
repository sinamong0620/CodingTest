function solution(n) {
  const a = n.toString();

  const b = a.split("");
  const c = b.reduce((acc, cur) => acc + Number(cur), 0);
  return c;
}
