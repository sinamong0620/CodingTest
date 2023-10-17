function solution(numbers) {
  var answer = numbers[0] * numbers[1];
  for (let i of numbers) {
    for (let x of numbers) {
      if (x === i) continue;
      const num = i * x;
      if (answer < num) answer = num;
    }
  }
  return answer;
}
