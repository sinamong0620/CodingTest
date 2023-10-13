function solution(quiz) {
  var answer = [];

  for (let i of quiz) {
    let number = [];
    let operator = [];
    const a = i.split(" ");
    const result = a[1] === "+" ? +a[0] + +a[2] : +a[0] - +a[2];
    result === +a[4] ? answer.push("O") : answer.push("X");
  }
  return answer;
}
