function solution(numbers, direction) {
  var answer = [...numbers];

  if (direction === "left") {
    const a = numbers[0];
    answer.push(a);
    //배열의 맨 앞 요쇼를 제거하고 반환된 값을 리턴
    answer.shift();
  } else {
    const a = numbers[numbers.length - 1];
    answer.unshift(a);
    answer.pop();
  }

  return answer;
}
