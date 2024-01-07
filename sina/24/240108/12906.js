function solution(arr) {
  var array = [];
  arr.map((a, idx) => {
    if (arr[idx] !== arr[idx - 1]) array.push(a);
  });

  return array;
}
