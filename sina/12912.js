function solution(a, b) {
  let sum = 0;

  //두 수가 같으면 아무거나 리턴
  if (a === b) {
    return a;
  }

  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }

  return sum;
}
