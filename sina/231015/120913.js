function solution(my_str, n) {
  var answer = [];
  var index = 0;
  for (let i = 0; i < my_str.length; i++) {
    const slice = my_str.slice(index, n + index);
    index += n;
    if (!slice) {
      break;
    }
    answer.push(slice);
  }

  return answer;
}
