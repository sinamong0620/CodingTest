function solution(cipher, code) {
  var answer = cipher.split("");
  const result = answer.reduce((a, c, i) => {
    if ((i + 1) % code === 0) {
      a += c;
    }
    return a;
  }, "");
  return result;
}
