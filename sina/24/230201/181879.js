function solution(num_list) {
  const a = num_list.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  const b = num_list.reduce((acc, cur) => {
    return (acc *= cur);
  }, 1);

  return num_list.length >= 11 ? a : b;
}
