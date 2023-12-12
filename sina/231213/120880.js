function solution(numlist, n) {
  var answer = [];
  var a = numlist.reduce((acc, cur) => {
    acc.push({ type: cur, num: Math.abs(n - cur) });
    return acc;
  }, []);

  a = a.sort((a, b) => {
    if (a.num === b.num) {
      return b.type - a.type;
    } else {
      return a.num - b.num;
    }
  });
  a.map((a) => answer.push(a.type));
  return answer;
}
