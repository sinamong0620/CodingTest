function solution(order) {
  let answer = 0;
  const a = order > 10 ? String(order).split("") : [String(order)];
  for (let i of a) {
    if (i === "3" || i === "6" || i === "9") {
      answer++;
    }
  }
  return answer;
}
