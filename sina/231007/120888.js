function solution(my_string) {
  var answer = [...my_string];
  const set = new Set(answer);
  const new_set = [...set];
  return new_set.join("");
}
