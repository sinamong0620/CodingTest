function solution(my_string) {
  let num = "";
  let array = [];
  for (let i of my_string) {
    if (Number(i) || Number(i) === 0) {
      num += i;
    }
    if (!Number(i) && Number(i) !== 0) {
      array.push(num);
      num = "";
    }
  }
  array.push(num);
  return array
    .filter((num) => num)
    .reduce((acc, current) => (acc += Number(current)), 0);
}
