function solution(my_string) {
  const array = [...my_string];
  const answer = array.reduce((acc, cur) => {
    if (
      cur === "a" ||
      cur === "e" ||
      cur === "i" ||
      cur === "o" ||
      cur === "u"
    ) {
      return acc;
    } else {
      return acc + cur;
    }
  }, "");
  return answer;
}
