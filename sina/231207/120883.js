function solution(id_pw, db) {
  var correct = db.filter((user) => user[0] === id_pw[0]);
  var result =
    Object.keys(correct).length < 1
      ? "fail"
      : correct[0][1] === id_pw[1]
      ? "login"
      : "wrong pw";

  return result;
}
