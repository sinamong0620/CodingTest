function solution(citations) {
  var hIndexArray = [];
  citations.map((x) => {
    const a = x;
    const b = citations.filter((index) => index >= a);
    hIndexArray.push(Math.min(a, b.length));
  });

  return Math.max(...hIndexArray);
}
