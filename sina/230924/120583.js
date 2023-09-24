function solution(array, n) {
  const answer = array.filter((num) => num === n);
  return answer.length;
}
