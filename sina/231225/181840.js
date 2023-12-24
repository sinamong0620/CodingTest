function solution(num_list, n) {
  const a = num_list.filter((x) => x === n);
  return a.length ? 1 : 0;
}
