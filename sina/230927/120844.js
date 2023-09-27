function solution(numbers, direction) {
  var answer = [...numbers];

  if (direction === "left") {
    const a = numbers[0];
    answer.push(a);
    answer.shift();
  } else {
    const a = numbers[numbers.length - 1];
    answer.unshift(a);
    answer.pop();
  }

  return answer;
}
