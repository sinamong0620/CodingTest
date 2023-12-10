function solution(bin1, bin2) {
  bin1 = bin1.padStart(Math.max(bin1.length, bin2.length), "0");
  bin2 = bin2.padStart(Math.max(bin1.length, bin2.length), "0");

  var answer = [];
  var remain = 0;

  bin1 = [...bin1];
  bin2 = [...bin2];
  for (let i = bin1.length - 1; i >= 0; i--) {
    //한자리씩 더하기 2면 1넘겨주기
    console.log(bin1[i], bin2[i]);
    var b = 0;
    const a = Number(bin1[i]) + Number(bin2[i]) + remain;
    if (a > 2) {
      remain = 1;
      b = 1;
    } else if (a > 1) {
      remain = 1;
      b = 0;
    } else if (a === 1) {
      remain = 0;
      b = 1;
    } else {
      remain = 0;
      b = 0;
    }
    answer.unshift(b);
  }
  remain = remain === 0 ? "" : 1;
  return remain + answer.join("");
}
