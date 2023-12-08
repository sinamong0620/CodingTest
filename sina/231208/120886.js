function solution(before, after) {
  for (let i of before) {
    if (after.indexOf(i) === -1) {
      return 0;
    }
    after = after.replace(i, "");
  }
  return 1;
}
