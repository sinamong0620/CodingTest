function solution(common) {
  //등차수열인지 등비수열인지 구분
  //뺏을때 같으면 등차 아니면 등비
  var a = common[1] - common[0] === common[2] - common[1];
  if (a) {
    const d = common[1] - common[0];
    return common[common.length - 1] + d;
  }

  const r = common[1] / common[0];
  return common[common.length - 1] * r;
}
