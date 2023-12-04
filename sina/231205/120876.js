function solution(lines) {
  var array = [];
  var result = [];
  var num = 0;

  //라인대로 배열생성
  for (let i of lines) {
    var lines = [];
    for (let x = i[0]; x <= i[1]; x++) {
      lines.push(x);
    }
    array.push(lines);
  }

  //교집합 부분 찾기
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i].filter((x) => array[i + 1].includes(x)));
  }
  result.push(array[2].filter((x) => array[0].includes(x)));

  //교집합 다 합치기
  var a = result.filter((x) => x.length > 1).sort();
  var b = [];
  console.log(a);

  //a가 1일경우
  if (a.length === 1) {
    b = [...a[0]];
  }
  for (let i = 0; i < a.length - 1; i++) {
    const c = a[i].filter((x) => a[i + 1].includes(x));
    if (c.length > 1) {
      b = [...b, ...a[i], ...a[i + 1]];
      continue;
    }
    a[0] = a[0].splice(0, a[0].length - 1);
    b = [...b, ...a[i], ...a[i + 1]];
  }

  return [...new Set(b.sort())].length - 1 < 0
    ? 0
    : [...new Set(b.sort())].length - 1;
}
