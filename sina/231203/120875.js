function solution(dots) {
  var answer = 0;
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
  const a1 = Math.abs(y2 - y1) / Math.abs(x2 - x1);
  const a2 = Math.abs(y4 - y3) / Math.abs(x4 - x3);
  return a1 === a2 ? 1 : 0;
}
