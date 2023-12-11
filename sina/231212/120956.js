function solution(babbling) {
  var answer = 0;
  const b = babbling.filter((a) => {
    if (a !== "aya" && a !== "ye" && a !== "woo" && a !== "ma") {
      return true;
    }
    return false;
  });
  const c = b.map((a) => a.split(/aya|ye|woo|ma/).join(""));
  return babbling.length - b.length + c.filter((a) => a === "").length;
}
