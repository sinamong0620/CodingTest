function solution(s) {
  var answer = {};
  for (let i of s) {
    if (Object.keys(answer).includes(i)) {
      answer[i] += 1;
    } else {
      answer[i] = 1;
    }
  }
  return Object.keys(answer)
    .filter((key) => answer[key] === 1)
    .sort()
    .join("");
}
