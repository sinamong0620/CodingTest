function solution(s) {
  let answer = 0;
  let array = s.split(" ");
  array.map((n, i) => {
    if (n === "Z") {
      answer -= array[i - 1];
    } else {
      answer += +n;
    }
  });
  return answer;
}
