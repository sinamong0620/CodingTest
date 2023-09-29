function solution(n) {
  var answer = 1;
  var number = 1;
  var count = 0;
  while (answer <= n) {
    answer *= number;
    number++;
    count++;
    console.log(answer, number);
  }

  return (count -= 1);
}
