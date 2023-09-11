function solution(strlist) {
  let answer = [];
  strlist.reduce((acc, cur) => {
    return answer.push(cur.length);
  }, answer);
  return answer;
}
