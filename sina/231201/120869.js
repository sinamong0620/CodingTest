function solution(spell, dic) {
  var answer = 0;
  var a = [];
  for (let i of dic) {
    const array = [...i];
    a.push(spell.filter((x) => array.includes(x)));
  }
  return a.filter((x) => x.length === spell.length).length
    ? a.filter((x) => x.length === spell.length).length
    : 2;
}
