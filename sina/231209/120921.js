function solution(A, B) {
  var answer = 0;

  for (let i = 0; i < A.length; i++) {
    //검사하기
    if (A === B) {
      return answer;
    }
    //아니라면 문자열 하나 더 미루기
    const a = [...A];
    const slice = a.splice(A.length - 1, 1);
    a.unshift(slice);
    A = a.join("");
    answer++;
  }
  //그래도 끝까지 없으면 -1 리턴
  return -1;
}
