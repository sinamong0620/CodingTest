function solution(num_list) {
  const 홀수 = num_list.filter((num) => num % 2);
  const 짝수 = num_list.filter((num) => !(num % 2));

  return Number(홀수.join("")) + Number(짝수.join(""));
}
