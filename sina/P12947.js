function solution(x) {
  let real_num = x;
  let share = 10;
  let remainder = 10;
  const array = [];
  let sum = 0;

  //자리를 다 따로 나누어서 array에 보관
  while (share !== 0) {
    share = Math.floor(real_num / 10);
    remainder = Math.floor(real_num % 10);
    array.unshift(remainder);
    real_num = share;
  }

  for (i of array) {
    sum += i;
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }

  return array;
}
