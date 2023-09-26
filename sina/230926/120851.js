function solution(my_string) {
  const array = [...my_string];
  const b = array.map((num) => Number(num));
  const c = b.filter((num) => typeof num === typeof 1);
  const a = b.reduce((acc, cur) => {
    if (!isNaN(cur)) {
      acc += cur;
    }
    return acc;
  }, 0);
  return a;
}
