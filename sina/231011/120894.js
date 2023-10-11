function solution(numbers) {
  var answer = "";
  var realanswer = "";
  var object = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  for (let i of numbers) {
    answer += i;
    if (Object.keys(object).includes(answer)) {
      realanswer += object[answer];
      answer = "";
    }
  }
  return +realanswer;
}
