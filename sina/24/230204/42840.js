function solution(answers) {
  var answer = [];
  var student1 = [1, 2, 3, 4, 5];
  var student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a = answers.reduce((acc, cur, idx) => {
    const index = Math.floor(idx % student1.length);
    if (cur === student1[index]) return ++acc;
    return acc;
  }, 0);

  const b = answers.reduce((acc, cur, idx) => {
    const index = Math.floor(idx % student2.length);
    if (cur === student2[index]) return ++acc;
    return acc;
  }, 0);

  const c = answers.reduce((acc, cur, idx) => {
    const index = Math.floor(idx % student3.length);
    if (cur === student3[index]) return ++acc;
    return acc;
  }, 0);

  const big = Math.max(a, b, c);
  let array = [a, b, c];
  for (let i in array) {
    if (array[i] === big) answer.push(Number(i) + 1);
  }
  return answer;
}
