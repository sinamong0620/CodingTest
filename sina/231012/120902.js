function solution(my_string) {
  const string = [...my_string.replaceAll(" ", "")];

  const array = [];
  var sign = [];
  var answer = "";
  var num = 0;

  for (let i of string) {
    if (i !== "+" && i !== "-") {
      answer += i;
    } else {
      sign.push(i);
      array.push(answer);
      answer = "";
    }
  }

  array.push(answer);
  num = Number(array[0]);
  console.log(array, sign);
  for (let i = 1; i < array.length; i++) {
    console.log(array[i], num, sign[i]);
    if (sign[i - 1] === "-") {
      num = num - Number(array[i]);
      console.log("뺄셈");
    } else {
      num += Number(array[i]);
      console.log("덧셈");
    }
  }
  return num;
}
