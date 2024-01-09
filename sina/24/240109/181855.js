function solution(strArr) {
  const map = new Map();
  const answer = [];
  const a = strArr.reduce((acc, cur) => {
    acc.push(cur.length);
    return acc;
  }, []);

  a.map((str) => {
    if (!map.get(str)) {
      map.set(str, 1);
    } else {
      map.set(str, map.get(str) + 1);
    }
  });

  return Math.max(...map.values());
}
