function solution(array) {
  var answer = 0;
  for (let i of array) {
    const a = [...i.toString()];
    answer += a.filter((number) => number === "7").length;
  }
  return answer;
}
