function solution(numbers, k) {
  //처음시작하는 머쓱이 인덱스
  var num = 1;
  //공던지기 게임 카운팅
  var count = k;

  while (count > 1) {
    num += 2;
    if (num > numbers.length) {
      num %= numbers.length;
    }
    count--;
    console.log(num);
  }
  return num;
}
